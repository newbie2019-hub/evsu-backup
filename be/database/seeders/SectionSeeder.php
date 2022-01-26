<?php

namespace Database\Seeders;

use App\Models\Section;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'year_level' => '1',
                'section' => 'Section A'
            ],
            [
                'year_level' => '1',
                'section' => 'Section B'
            ],
            [
                'year_level' => '1',
                'section' => 'Section C'
            ],
            [
                'year_level' => '1',
                'section' => 'Section D'
            ],
            [
                'year_level' => '1',
                'section' => 'Section E'
            ],
            [
                'year_level' => '1',
                'section' => 'Section F'
            ],
            [
                'year_level' => '2',
                'section' => 'Section A'
            ],
            [
                'year_level' => '2',
                'section' => 'Section B'
            ],
            [
                'year_level' => '2',
                'section' => 'Section C'
            ],
            [
                'year_level' => '2',
                'section' => 'Section D'
            ],
            [
                'year_level' => '2',
                'section' => 'Section E'
            ],
            [
                'year_level' => '2',
                'section' => 'Section F'
            ],
            
            [
                'year_level' => '3',
                'section' => 'Section A'
            ],
            [
                'year_level' => '3',
                'section' => 'Section B'
            ],
            [
                'year_level' => '3',
                'section' => 'Section C'
            ],
            [
                'year_level' => '3',
                'section' => 'Section D'
            ],
            [
                'year_level' => '3',
                'section' => 'Section E'
            ],
            [
                'year_level' => '3',
                'section' => 'Section F'
            ],
            [
                'year_level' => '4',
                'section' => 'Section A'
            ],
            [
                'year_level' => '4',
                'section' => 'Section B'
            ],
            [
                'year_level' => '4',
                'section' => 'Section C'
            ],
            [
                'year_level' => '4',
                'section' => 'Section D'
            ],
            [
                'year_level' => '4',
                'section' => 'Section E'
            ],
            [
                'year_level' => '4',
                'section' => 'Section F'
            ],
            [
                'year_level' => '5',
                'section' => 'Section A'
            ],
            [
                'year_level' => '5',
                'section' => 'Section B'
            ],
            [
                'year_level' => '5',
                'section' => 'Section C'
            ],
            [
                'year_level' => '5',
                'section' => 'Section D'
            ],
            [
                'year_level' => '5',
                'section' => 'Section E'
            ],
            [
                'year_level' => '5',
                'section' => 'Section F'
            ],
            
        ];

        foreach($data as $section) {
            Section::create($section);
        }
    }
}
