<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
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
                'college_id' => 2,
                'course' => 'Bachelor of Science in Economics',
                'abbreviation' => 'BSEcon',
            ],
            [
                'college_id' => 2,
                'course' => 'Bachelor of Arts in English Language',
                'abbreviation' => 'BAEL',
            ],
            [
                'college_id' => 2,
                'course' => 'Batsilyer ng Sining sa Filipino',
                'abbreviation' => 'N/A',
            ],
            [
                'college_id' => 2,
                'course' => 'Bachelor of Science in Mathematics',
                'abbreviation' => 'BSMath',
            ],
            [
                'college_id' => 2,
                'course' => 'Bachelor of Science in Statistics',
                'abbreviation' => 'BSStat',
            ],
            [
                'college_id' => 2,
                'course' => 'Bachelor of Science in Chemistry',
                'abbreviation' => 'BSChem',
            ],
            [
                'college_id' => 2,
                'course' => 'Bachelor of Science in Environmental Science',
                'abbreviation' => 'BSES',
            ],
            [
                'college_id' => 3,
                'course' => 'Bachelor of Science in Accountancy',
                'abbreviation' => 'BSA',
            ],
            [
                'college_id' => 3,
                'course' => 'Bachelor of Science in Entrepreneurship',
                'abbreviation' => 'BSE',
            ],
            [
                'college_id' => 3,
                'course' => 'Bachelor of Science in Marketing',
                'abbreviation' => 'BSM',
            ],
            [
                'college_id' => 3,
                'course' => 'Bachelor of Science in Office Administration',
                'abbreviation' => 'BSOA',
            ],
            // College of Education
            [
                'college_id' => 4,
                'course' => ' Bachelor of Elementary Education',
                'abbreviation' => 'BEED',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Secondary Education Major in Mathematics',
                'abbreviation' => 'BSEd',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Secondary Education Major in Science',
                'abbreviation' => 'BSEd',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Culture & Arts Education',
                'abbreviation' => 'BCAEd',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Physical Education',
                'abbreviation' => 'BPEd',
            ],
            [
                'college_id' => 4,
                'course' => 'Diploma in Teaching Secondary',
                'abbreviation' => 'DTS',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Food & Service Management',
                'abbreviation' => 'BTVTEd - FSM',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Civil Construction Technology',
                'abbreviation' => 'BTVTEd - CCT',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Automotive Technology',
                'abbreviation' => 'BTVTEd - AT',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Heating Ventilating & Air-conditioning Technology',
                'abbreviation' => 'BTVTEd - HVACRT',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Electrical Technology',
                'abbreviation' => 'BTVTEd - ET',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Electronics Technology',
                'abbreviation' => 'BTVTEd - ELX',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Garments, Fashion & Design',
                'abbreviation' => 'BTVTEd - GFD',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Welding and Fabrication Technology',
                'abbreviation' => 'BTVTEd - WFT',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of Technical-Vocational Teacher Education Major in Mechanical Technology',
                'abbreviation' => 'BTVTEd - MT',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of  Technology & Livelihood Education Major in Industrial Arts',
                'abbreviation' => 'BTLEd - IA',
            ],
            [
                'college_id' => 4,
                'course' => 'Bachelor of  Technology & Livelihood Education Major in Home Economics',
                'abbreviation' => 'BTLEd - HE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Chemical Engineering',
                'abbreviation' => 'BSChE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Civil Engineering',
                'abbreviation' => 'BSCE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Electrical Engineering',
                'abbreviation' => 'BSEE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Electronics & Communications Engineering',
                'abbreviation' => 'BSECE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Geodetic Engineering',
                'abbreviation' => 'BSGE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Mechanical Engineering',
                'abbreviation' => 'BSME',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Industrial Engineering',
                'abbreviation' => 'BSIE',
            ],
            [
                'college_id' => 5,
                'course' => 'Bachelor of Science in Information Technology',
                'abbreviation' => 'BSIT',
            ],
            // College of Technology
            [
                'college_id' => 6,
                'course' => 'Bachelor of Industrial Technology Major in Civil Technology',
                'abbreviation' => 'BIT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Industrial Technology Major in Clothing, Textiles & Related Arts',
                'abbreviation' => 'BIT - CTRA',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Industrial Technology Major in Drafting Technology',
                'abbreviation' => 'BIT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Industrial Technology Major in Electricity, Refrigeration and Air Conditioning',
                'abbreviation' => 'BIT - ERAC',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Industrial Technology Major in Electronics Technology',
                'abbreviation' => 'BIT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Industrial Technology Major in Food Technology',
                'abbreviation' => 'BIT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Mechanical Technology Major in Automotive Technology',
                'abbreviation' => 'BMT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Mechanical Technology Major in Foundry',
                'abbreviation' => 'BMT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Mechanical Technology Major in Welding',
                'abbreviation' => 'BMT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Mechanical Technology Major in FMachine Shop Technology',
                'abbreviation' => 'BMT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Hotel and Restaurant Technology',
                'abbreviation' => 'BSHRT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Hospitality Management',
                'abbreviation' => 'BSHM',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Nutrition & Dietetics',
                'abbreviation' => 'BSND',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Civil and Construction',
                'abbreviation' => 'BSIT - CCT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Clothing and Fashion Design',
                'abbreviation' => 'BSIT - CFD',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Culinary Arts',
                'abbreviation' => 'BSIT - CUL',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Electricity',
                'abbreviation' => 'BSIT - ELC',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Electronics',
                'abbreviation' => 'BSIT - ET',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Graphics Arts and Printing',
                'abbreviation' => 'BSIT - GAP',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Industrial Technology Major in Refrigeration and Air-Conditioning',
                'abbreviation' => 'BSIT - RAC',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Mechanical Technology Major in Automotive',
                'abbreviation' => 'BSMT - AT',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Mechanical Technology Major in Machine Shop',
                'abbreviation' => 'BSMT - MST',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Mechanical Technology Major in Metallurgy',
                'abbreviation' => 'BSMT - MET',
            ],
            [
                'college_id' => 6,
                'course' => 'Bachelor of Science in Mechanical Technology Major in Welding and Fabrication',
                'abbreviation' => 'BSMT - WFT',
            ],
        ];

        foreach($data as $course) {
            Course::create($course);
        }
    }
}
