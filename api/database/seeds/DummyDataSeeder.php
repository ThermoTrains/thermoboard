<?php

use App\Entity;
use App\EntityRecord;
use App\Place;
use App\Record;
use App\Sensor;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DummyDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $this->command->getOutput()->writeln('Seeding entity kinds');
        factory(App\EntityKind::class, 5)->create();

        $this->command->getOutput()->writeln('Seeding entities');
        factory(App\Entity::class, 25)->create();

        $places = Place::all();
        $sensors = Sensor::all();
        $entities = Entity::all();

        $this->command->getOutput()->writeln('Seeding records');
        foreach ($places as $place) {
            factory(App\Record::class, 50)->create()->each(function ($record) use ($place) {
                $record->place_id = $place->id;
                $record->save();
            });
        }

        $records = Record::all();

        $this->command->getOutput()->writeln('Seeding entity records');
        $this->seedEntityRecords($records, $entities);

        $entityRecords = EntityRecord::all();

        foreach ($sensors as $sensor) {
            $this->command->getOutput()->writeln('Seeding record values for ' . $sensor->name);
            $this->seedRecordValues($records, $sensor);

            $this->command->getOutput()->writeln('Seeding entity record values for ' . $sensor->name);
            $this->seedEntityRecordValues($entityRecords, $sensor);
        }
    }

    /**
     * @param $records
     * @param $entities
     */
    private function seedEntityRecords($records, $entities)
    {
        if (empty($records) || empty($entities)) {
            return;
        }

        foreach ($records as $record) {
            $entityRecordCount = rand(3, 8);
            $selectedEntities = [];

            for ($i = 0; $i < $entityRecordCount; $i++) {
                $selected = rand(0, count($entities) - 1);

                if (in_array($selected, $selectedEntities)) {
                    // prevent duplicates
                    $i--;
                    continue;
                }

                $selectedEntities[$i] = $selected;

                DB::table('entity_records')->insert([
                    'name' => ($i + 1) . '. Wagen',
                    'record_id' => $record->id,
                    'entity_id' => $entities[$selected]->id,
                ]);
            }
        }
    }

    /**
     * @param $records
     * @param $sensor
     * @throws Exception
     */
    private function seedRecordValues($records, $sensor)
    {
        foreach ($records as $record) {
            $valueId = $this->seedValue($sensor);

            DB::table('record_value')->insert([
                'record_id' => $record->id,
                'value_id' => $valueId
            ]);
        }
    }

    /**
     * @param $entityRecords
     * @param $sensor
     * @throws Exception
     */
    private function seedEntityRecordValues($entityRecords, $sensor)
    {
        foreach ($entityRecords as $entityRecord) {
            $valueId = $this->seedValue($sensor);

            DB::table('entity_record_value')->insert([
                'entity_record_id' => $entityRecord->id,
                'value_id' => $valueId
            ]);
        }
    }

    /**
     * @param $sensor
     * @return mixed
     * @throws Exception
     */
    private function seedValue($sensor)
    {
        $data = [
            'sensor_id' => $sensor->id
        ];

        $data = $this->fillSensorValue($sensor, $data);

        return DB::table('values')->insertGetId($data);
    }

    /**
     * @param $sensor
     * @param $data
     * @return mixed
     * @throws Exception
     */
    private function fillSensorValue($sensor, $data)
    {
        switch ($sensor->produces) {
            case 'STRING':
                $weathers = ['Sunny', 'Rainy', 'Snowy'];
                $data['string'] = $sensor->name === 'Weather'
                    ? $weathers[array_rand($weathers)]
                    : 'foo';
                break;
            case 'TEMPERATURE':
                $data['temperature'] = rand(250, 310);
                break;
            case 'NUMBER':
                $data['number'] = rand(-100, 100);
                break;
            case 'IMAGE':
                $data['image'] = 'https://thermobox.sebastianhaeni.ch/artifacts/2017-11-30@04-51-57-IR.seq.jpg';
                break;
            default:
                throw new \Exception('Not implemented sensor type: ' . $sensor->produces);
        }

        return $data;
    }
}
