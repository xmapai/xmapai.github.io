var config = {
    style: 'mapbox://styles/mbatran/ckw3cw8vq2k2n14rxvog1sb3p',
    accessToken: 'pk.eyJ1IjoibWJhdHJhbiIsImEiOiJja24wYjc5ZGMwbTIyMnRwZmE4N2RxNzNvIn0.jbX0HTI70wGsM0nMD1ytAQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: "Oxagon - Complexe industriel d'Arabie Saoudite",
    subtitle: '',
    byline: 'Analyse visuelle des données',
    footer: `
    Designed and developed by  <a href="https://www.mohamedbatran.com" target="_blank" > Batran</a>
    `
    ,    chapters: [
        {
            id: '01_saudi',
            title: "Oxagon - Complexe industriel d'Arabie Saoudite",
            image: 'assets/mobile/oxagon_photo.png',
            description:
            `
            <br>  
            Le 17 novembre 2021, l'Arabie saoudite a annoncé un nouveau projet industriel ambitieux appelé <a href="https://www.neom.com/en-us/regions/oxagon">Oxagon</a>.                        `,
            location: {

                center: [45.10694, 25.16552],
                zoom: 3,
                pitch: 0,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'saudi',
                    opacity: 1
                },
                {
                    layer: 'oxagon-pt',
                    opacity: 0
                }                                        

            ],
            onChapterExit: [
             ]
            }

            ,

            {
                id: '02_oxagon',
                title: "Localisation d'Oxagon en Arabie Saoudite",
                image: 'assets/mobile/legend_saudi_oxagon.png',
                description:
                `
                La ville flottante sera située au nord-ouest de l'Arabie saoudite, le long de la mer Rouge, et constituera un centre logistique mondial.
                                `,
                location: {
    
                    center: [45.10694, 25.16552],
                    zoom: 3,
                    pitch: 0,
                    bearing: 0.00
                            },
                onChapterEnter: [
                    {
                        layer: 'oxagon-pt',
                        opacity: 1
                    }                
    
                ],
                onChapterExit: [

                 ]
                }

            ,

            {
                id: '03_oxagon',
                title: 'Pourquoi le nom "Oxagon"',
                image: 'assets/mobile/oxagon_shape.png',
                description:
                `

                Le nom Oxagon est composé de deux parties. Ox", qui signifie "oxygène", et "gon", qui signifie "forme polygonale". Ce nom porte le message du respect de l'environnement et de la durabilité tout en inspirant les valeurs de l'innovation industrielle, du progrés et de l'efficacité.
                `,
                location: {
    
                    center: [35.62684, 27.40202],
                    zoom: 10.83,
                    pitch: 60.00,
                    bearing: -42.69
                
                },
                onChapterEnter: [
                    {
                        layer: 'oxagon-pt',
                        opacity: 0
                    },
                    {
                        layer: 'saudi',
                        opacity: 0
                    }          
                    ,
                    {
                        layer: 'oxagon',
                        opacity: .3
                    }                
           
    
                ],
                onChapterExit: [
                    {
                        layer: 'oxagon',
                        opacity: 0
                    }                

                 ]
                }
    
,

{
    id: '04_oxagon',
    title: 'Pourquoi le nom "Oxagon',
    description:
    `
    Construit à moitié sur terre et à moitié sur mer, le complexe industriel sera un centre d'innovation de 48 kilomètres carrés à huit côtés.
    
    `,
    location: {

        center: [35.62684, 27.40202],
        zoom: 10.83,
        pitch: 60.00,
        bearing: -42.69
    },
    onChapterEnter: [
        {
            layer: 'oxagon2',
            opacity: 1
        }                

    ],
    onChapterExit: [
        {
            layer: 'oxagon2',
            opacity: 0
        }                


     ]
    }

,

{
    id: '05_oxagon',
    title: 'Localisation par rapport à NEOM',
    image: 'assets/mobile/neom_oxagon.png',

    description:
    `
    Le complexe industriel Oxagon fait partie du projet NEOM situé juste au sud de la ville futuriste.
    
    `,
    location: {

        center: [35.20282, 28.36744],
        zoom: 6.64,
        pitch: 0.00,
        bearing: -36.11
    
    },
    onChapterEnter: [
        {
            layer: 'oxagon-pt',
            opacity: 1
        } ,
        {
            layer: 'neom',
            opacity: 0.5
        }                
              

    ],
    onChapterExit: [
        {
            layer: 'neom',
            opacity: 0
        }                

     ]
    }

,
{
    id: '06_oxagon',
    title: 'Localisation par rapport à THE LINE',
    image: 'assets/mobile/oxagon_line.png',
    description:
    `
    Le complexe industriel sera situé à environ 50 km du point le plus proche de la ville THE LINE et à environ 100 km - 120 km des deux extrémités.    
    
    `,
    location: {

        center: [35.20282, 28.36744],
        zoom: 6.64,
        pitch: 0.00,
        bearing: -36.11
    
    },
    onChapterEnter: [
        {
            layer: 'theline',
            opacity: 1
        }                

    ],
    onChapterExit: [
        {
            layer: 'theline',
            opacity: 0
        } ,
        {
            layer: 'neom',
            opacity: 0
        }                
               

     ]
    }

    ,
    {
        id: '07_oxagon',
        title: "Localisation par rapport aux principales villes d'Arabie saoudite",
        image: 'assets/mobile/major_cities.png',
        description:
        `
        Oxagon se situera à 150 km de Tabuk, 800 km de Jeddah, 800 km de La Mecque, 550 km de Médine et 1300 km de la capitale, Riadh.
        <table>
        <tr>
          <th>Major City</th>
          <th>Distance </th>
        </tr>
        <tr>
          <td>Tabuk</td>
          <td>150 KM</td>
        </tr>
        <tr>
          <td>Jeddah</td>
          <td>800 KM</td>
        </tr>
        <tr>
          <td>Mecca</td>
          <td>800 KM</td>
        </tr>
        <tr>
          <td>Madinah</td>
          <td>550 KM</td>
        </tr>
        <tr>
        <td>Riadh (The Capital)</td>
        <td>1300 KM</td>
      </tr>

      </table>

    
        `,
        location: {
    
            center: [40.84322, 27.30787],
            zoom: 3.86,
            pitch: 0.00,
            bearing: 0.00
        
        
        },
        onChapterEnter: [
            {
                layer: 'cities',
                opacity: 1
            }                
    
        ],
        onChapterExit: [
            {
                layer: 'cities',
                opacity: 0
            }                

         ]
        }
,
{
    id: '08_oxagon',
    title: 'Résidents dans un rayon de 200 km',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    L'Arabie saoudite compte 34,8 millions d'habitants répartis dans différentes zones géographiques. La ville flottante, qui fait partie de NEOM, attirera un grand nombre des résidents actuels. En 2021, environ 230 000 personnes vivent dans un rayon de 200 km autour d'Oxagon.    
    `,
    location: {


        center: [35.84229, 27.80227],
        zoom: 7.500,
        pitch: 60.00,
        bearing: -51.18
    
    },
    onChapterEnter: [
        {
            layer: 'pop1500',
            opacity: 1
        }                

    ],
    onChapterExit: [
        {
            layer: 'pop1500',
            opacity: 0
        }                

     ]
    }
,

{
    id: '09_oxagon',
    title: 'Résidents dans un rayon de 500 km',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    Environ 550,000 habitants vivent dans un rayon de 500 km de l'Oxagon.
    
    `,
    location: {

        center: [35.84229, 27.80227],
        zoom: 6,
        pitch: 60.00,
        bearing: -51.18
        
    },
    onChapterEnter: [
        {
            layer: 'pop1500',
            opacity: 1
        }                


    ],
    onChapterExit: [
        {
            layer: 'pop1500',
            opacity: 0
        }                

     ]
    }
,

{
    id: '10_oxagon',
    title: 'Habitants dans un rayon de 750 km',
    image: 'assets/mobile/pop_legend.png',
    description:
    `

    Environ 1 700 000 personnes vivent dans un rayon de 750 km autour de l'Oxagon.

    `,
    location: {

        center: [38.61402, 22.77488],
        zoom: 6.3,
        pitch: 60.00,
        bearing: -45.18
            
    },
    onChapterEnter: [
        {
            layer: 'pop1500',
            opacity: 1
        }                

    ],
    onChapterExit: [
        {
            layer: 'pop1500',
            opacity: 0
        }                

        

     ]
    },
    {
        id: '11_oxagon',
        title: 'Résidents dans un rayon de 1500 km',
        image: 'assets/mobile/pop_legend.png',
        description:
        `

        Environ 20 millions de personnes vivent dans un rayon de 750 km autour de l'Oxagon.
        `,
        location: {
    

            center: [43.17203, 25.63024],
            zoom: 6.19,
            pitch: 60.00,
            bearing: -80.00
        },
        onChapterEnter: [
            {
                layer: 'pop1500',
                opacity: 1
            }                    
        ],
        onChapterExit: [
            {
                layer: 'pop1500',
                opacity: 0
            }                
    
    
         ]
        }
    

    ,
    {
        id: '14_oxagon',
        title: 'Situation stratégique',
        description:
        `
        Oxagon est situé le long de la mer Rouge. Environ 13 % du commerce mondial passe par la mer Rouge. Sa position lui permet d'être l'un des centres logistiques les plus avancés à l'échelle mondial, puisqu'il sera equippé d'un port et d'un aéroport intégrés qui seront à la pointe de la technologie.
        `,
        location: {
    
            center: [36.10033, 29.02919],
            zoom: 3.97,
            pitch: 0.00,
            bearing: 0.00
        },
        onChapterEnter: [
    
        ],
        onChapterExit: [
         ]
        }
,
{
    id: '15_oxagon',
    title: 'Distance du canal de Suez',
    image: 'assets/mobile/suez.png',
    description:
    `
    Oxagon se trouve à environ 400 km du canal de Suez, qui relie la mer Rouge à la mer Méditerranée.    
    `,
    location: {

center: [34.01101, 30.29511],
zoom: 5.54,
pitch: 0.00,
bearing: 0.00

},
    onChapterEnter: [
        {
            layer: 'suez',
            opacity: 1
        }                

    ],
    onChapterExit: [
        {
            layer: 'suez',
            opacity: 0
        }                

     ]
    }



    ]
};
