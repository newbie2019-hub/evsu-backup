<?php

namespace Database\Seeders;

use App\Models\College;
use Illuminate\Database\Seeder;

class CollegeSeeder extends Seeder
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
                'college' => 'College of Architecture and Allied Discipline',
                'abbreviation' => 'CAAD',
                'mission' => 'Competent leaders, providing quality education and professional training in selected areas of specializations through instruction, research, extension services and production.',
                'vision' => 'World class state university imbued with positive values in the professional and advanced technological fields for human and progress.'
            ],
            [
                'college' => 'College of Arts and Sciences',
                'abbreviation' => 'CAS',
                'mission' => 'Develop a Strong Technologically and Professionally Competent Productive Human Resource Imbued with Positive Values Needed to Propel Sustainable Development',
                'vision' => 'A Leading State University in Technological and Professional Education'
            ],
            [
                'college' => 'College of Business and Entrepreneurship',
                'abbreviation' => 'COBE',
                'mission' => 'Develop a Strong Technologically and Professionally Competent Productive Human Resource Imbued with Positive Values Needed to Propel Sustainable Development.',
                'vision' => 'A Leading State University in Technological and Professional Education'
            ],
            [
                'college' => 'College of Education',
                'abbreviation' => 'COEd',
                'mission' => 'Developing Globally competitive educators and service providers equipped with intelligence, positive work habits and environment friendly.',
                'vision' => 'A center for development for teacher training.'
            ],
            [
                'college' => 'College of Engineering',
                'abbreviation' => 'COE',
                'mission' => 'Develop globally competitive professional engineers and technologists imbued with positive values through instruction',
                'vision' => 'A premier institute in the fields of engineering and technology supportive of regional and national development'
            ],
            [
                'college' => 'College of Technology',
                'abbreviation' => 'COT',
                'mission' => 'Developing technologist and seafarers by providing advance vocational, industrial and professional training basically designed to harness the technological potentialities of region VIII',
                'vision' => 'Versatile technologist and seafarers with adequate job intelligence and positive work habits who are continuously supportive of regional and national development.'
            ],
        ];

        foreach($data as $college){
            College::create($college);
        }
    }
}
