<?php

namespace Database\Seeders;

use App\Models\Organization;
use Illuminate\Database\Seeder;

class OrganizationSeeder extends Seeder
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
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Industrial Technology Organization',
                'abbreviation' => 'I.T.O',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Young Entrepreneurs Society',
                'abbreviation' => 'YES',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Philippine Institute of Civil Engineers - EVSU CHAPTER',
                'abbreviation' => 'PICE',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Students Association of Geodetic Engineering',
                'abbreviation' => 'SAGE',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Philippine Institute of Industrial Engineers',
                'abbreviation' => 'PIIE',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Institute of Integrated Electrical Engineering',
                'abbreviation' => 'IIEE',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Information Technology Link',
                'abbreviation' => 'INTEL',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Junior Philippine Institute of Chemical Engineers',
                'abbreviation' => 'JPICE',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Junior Philippine Society of Mechanical Rngineering',
                'abbreviation' => 'JPSME',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Institute of Electronics Engineers of the Philippines',
                'abbreviation' => 'IEEP',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'United Architects of the Philippines Student Auxiliary - EVSU Chapter',
                'abbreviation' => 'UAPSA',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Philippine Institute of Interior Designs - Student Auxiliary Body',
                'abbreviation' => 'PIID',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Chemistry Society',
                'abbreviation' => 'CS',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Society of Pure and Applied Mathematics',
                'abbreviation' => 'SPAM',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Society of Environmental Science Students',
                'abbreviation' => 'SESS',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Science Education Students Society',
                'abbreviation' => 'SciEdss',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Junior Philippine Statistical Association',
                'abbreviation' => 'JPSA',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Kapisanan ng mga Studyanteng Maka-Wika',
                'abbreviation' => 'N/A',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Junior Philippine Institute of Accountants',
                'abbreviation' => 'JPIA',
            ],
            [
                'organization_service_id' => 2,
                'college_id' => rand(1, 6),
                'organization' => 'Federation of Junior Marketing Association',
                'abbreviation' => 'FJMA',
            ],
            [
                'organization_service_id' => 3,
                'college_id' => rand(1, 6),
                'organization' => 'DEACONS',
                'abbreviation' => 'N/A',
            ],
            [
                'organization_service_id' => 1,
                'college_id' => rand(1, 6),
                'organization' => 'Rotary Club of EVSU',
                'abbreviation' => 'N/A',
            ],
        ];

        foreach($data as $org) {
            Organization::create($org);
        }
    }
}
