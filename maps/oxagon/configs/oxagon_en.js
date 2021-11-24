var config = {
    style: 'mapbox://styles/mbatran/ckw3cw8vq2k2n14rxvog1sb3p',
    accessToken: 'pk.eyJ1IjoibWJhdHJhbiIsImEiOiJja24wYjc5ZGMwbTIyMnRwZmE4N2RxNzNvIn0.jbX0HTI70wGsM0nMD1ytAQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Oxagon - Saudi Arabia Industerial Complex',
    subtitle: '',
    byline: 'Visual data analytics',
    footer: `
    Designed and developed by  <a href="https://www.mohamedbatran.com" target="_blank" > Batran</a>
    `
    ,    chapters: [
        {
            id: '01_saudi',
            title: 'Oxagon - an industerial half floating complex',
            image: 'assets/mobile/oxagon_photo.png',
            description:
            `
            <br>  
            In Nov 17th, 2021 Saudi Arabia announced a new ambitious industerial project called <a href="https://www.neom.com/en-us/regions/oxagon"> Oxagon</a> 
            `,
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
                title: 'Oxagon Location in Saudi Arabia',
                image: 'assets/mobile/legend_saudi_oxagon.png',
                description:
                `
                The floating city will be located north west Saudi Arabia along the Red Sea as a global logistical hub.  
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
                title: 'Why the name "Oxagon"',
                image: 'assets/mobile/oxagon_shape.png',
                description:
                `
                The name Oxagon is composed of two parts. “Ox” from Oxygen and “gon” as in polygonal sided shapes. The message from the name is being environmentally friendly and focusing on sustainability while focusing on industrial innovation and efficiency. 
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
    title: 'Why the name "Oxagon"',
    description:
    `
    Built half on land and half on sea, the industrial complex will be an 8 sided 48 square kilometers innovation hub.   

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
    title: 'Location to NEOM',
    image: 'assets/mobile/neom_oxagon.png',

    description:
    `
    Oxagon industrial complex is part of the NEOM project located just south of the futuristic city. 

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
    title: 'Location from THE LINE',
    image: 'assets/mobile/oxagon_line.png',
    description:
    `
    The industrial complex will be approximately 50 km away from the nearest point along the line city and about 100 km - 120 km from both ends. 

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
        title: 'Location from Major Saudi Arabia Cities',
        image: 'assets/mobile/major_cities.png',
        description:
        `
        Oxagon will be 150 KM from Tabuk, 800 KM from Jeddah, 800 KM from Mecca, 550 KM from Madinah, and 1300 KM from the capital city, Riadh. 
        <table>
        <tr>
          <th>Major City</th>
          <th>Distance 2020</th>
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
    title: 'Residents within 200 km radius',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    Saudi Arabia is home for 34.8 million residents living in different geographic distributions. The floating city, being part of NEOM, will attract many of the current residents. Approximately 230,000 residents live within 200Km from the Oxagon as of 2021. 

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
    title: 'Residents within 500 km radius',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    Approximately 250,000 residents live within 750Km from the Oxagon.
    
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
    title: 'Residents within 750 km radius',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    Approximately 1,700,000 residents live within 750Km from the Oxagon.

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
        title: 'Residents within 1500 km radius',
        image: 'assets/mobile/pop_legend.png',
        description:
        `
        Approximately 20,000,000 residents live within 750Km from the Oxagon.
    
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
        title: 'Strategic Location',
        description:
        `
        Oxagon is positioned along the Red Sea. Approximately 13 percent of the global trade passes through the Red Sea. It is positioned to be one of the world’s most technologically advanced logistics hubs with state-of-the-art integrated port and airport. 
    
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
    title: 'Distance from the Suez Canal',
    image: 'assets/mobile/suez.png',
    description:
    `
    Oxagon is approximately 400km away from the Suez canal, which is connecting the Red Sea with the Mediterranean Sea.     

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
