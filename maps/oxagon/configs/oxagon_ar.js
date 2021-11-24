var config = {
    style: 'mapbox://styles/mbatran/ckw3cw8vq2k2n14rxvog1sb3p',
    accessToken: 'pk.eyJ1IjoibWJhdHJhbiIsImEiOiJja24wYjc5ZGMwbTIyMnRwZmE4N2RxNzNvIn0.jbX0HTI70wGsM0nMD1ytAQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'أوكساچون - مدينه صناعية في المملكة العربية السعودية',
    subtitle: '',
    byline: 'تحليل مكاني علي الخريطة',
    footer: `
    تصميم و تنفيذ  <a href="https://www.mohamedbatran.com" target="_blank" > محمد بطران</a>
    `
    ,    chapters: [
        {
            id: '01_saudi',
            title: ' أوكساچون - مدينه صناعية في المملكة العربية السعودية',
            image: 'assets/mobile/oxagon_photo.png',
            description:
            `
            <br>  
            في 17 نوفمبر 2021 ، أعلنت المملكة العربية السعودية عن مشروع صناعي جديد وطموح يسمى <a href="https://www.neom.com/en-us/regions/oxagon"> أوكساچون </a>
            
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
                title: 'موقع أوكساچون في المملكة العربية السعودية',
                image: 'assets/mobile/legend_saudi_oxagon.png',
                description:
                `
                تقع المدينة العائمة شمال غرب المملكة العربية السعودية على طول البحر الأحمر كمركز لوجستي عالمي 

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
                title: '"لماذا اسم "أوكساچون"',
                image: 'assets/mobile/oxagon_shape.png',
                description:
                `
                يتكون اسم Oxagon من جزأين. "Ox" من الأكسجين و "gon" كما في الأشكال متعددة الأضلاع. الرسالة من الاسم هي أن تكون صديقة للبيئة وتركز على الاستدامة مع التركيز على الابتكار الصناعي والكفاءة 

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
    title: '"لماذا اسم "أوكساجون"',
    description:
    `
    سيتم بناء المجمع الصناعي نصفه على الأرض والنصف الآخر على البحر ، وسيكون بمثابة مركز ابتكار. كما انه مكون من 8 جوانب على مساحة 48 كيلومترًا مربعًا.
    
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
    title: 'الموقع من مدينة نيوم',
    image: 'assets/mobile/neom_oxagon.png',

    description:
    `
    مجمع أوكساچون الصناعي هو جزء من مشروع نيوم. و يقع المجمع جنوب المدينة المستقبلية نيوم.
    
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
    title: 'الموقع من "THE LINE"',
    image: 'assets/mobile/oxagon_line.png',
    description:
    `
    سيكون المجمع الصناعي على بعد حوالي 50 كم من أقرب نقطة على "THE LINE" وحوالي 100 كم - 120 كم من كلا الطرفين.
    
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
        title: 'البعد عن المدن الرئيسية في المملكة العربية السعودية',
        image: 'assets/mobile/major_cities.png',
        description:
        `
        ستكون مدينة أوكساچون على بعد 150 كم من تبوك ، و 800 كم من جدة ، و 800 كم من مكة ، و 550 كم من المدينة المنورة ، و 1300 كم من العاصمة الرياض. 
        <table>
        <tr>
          <th>المسافة </th>
          <th>المدن الرئيسية</th>
        </tr>
        <tr>
        <td>١٥٠ كم</td>  
        <td>تبوك</td>
        </tr>
        <tr>
          <td>٨٠٠ كم</td>
          <td>جدة</td>

        </tr>
        <tr>
          <td>٨٠٠ كم</td>
          <td>مكة</td>

        </tr>
        <tr>
          <td>٥٥٠ كم</td>
          <td>المدينة المنورة</td>

        </tr>
        <tr>
        <td>١٣٠٠ كم</td>
        <td>الرياض</td>

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
    title: 'عدد السكان في محيط  ٢٠٠ كم',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    المملكة العربية السعودية هي موطن ل 34.8 مليون نسمة يعيشون في توزيعات جغرافية مختلفة. ستجذب المدينة العائمة ، كونها جزءًا من نيوم ، العديد من السكان الحاليين. يعيش ما يقرب من ٢٣٠ الف ساكن على بعد ٢٠٠ كم من Oxagon اعتبارًا من عام 2021.

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
    title: 'عدد السكان في محيط ٥٠٠ كم',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    يعيش ما يقرب من ٥٥٠ الف ساكن على بعد ٥٠٠ كم من أوكساچون.

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
    title: 'عدد السكان في محيط 500 كم',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    يعيش ما يقرب من ١ مليون و ٧٠٠ الف ساكن على بعد ٧٥٠ كم من أوكساچون.

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
        title: 'عدد السكان في محيط ١٥٠٠ كم',
        image: 'assets/mobile/pop_legend.png',
        description:
        `
        يعيش ما يقرب من ٢٠ مليون ساكن على بعد ١٥٠٠ كم من أوكساچون    
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
        title: 'الموقع الاستراتيجي',
        description:
        `

        يقع أوكساچون على طول البحر الأحمر. يمر ما يقرب من ١٣ في المائة من التجارة العالمية عبر البحر الأحمر. لقد تم وضعها لتكون واحدة من أكثر المراكز اللوجيستية تقدمًا من الناحية التكنولوجية في العالم مع أحدث الموانئ والمطارات المتكاملة.

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
    title: 'البعد عن قناة السويس',
    image: 'assets/mobile/suez.png',
    description:
    `
    تقع مدينة أوكساغون على بعد ٤٠٠ كيلومتر تقريبًا من قناة السويس التي تربط البحر الأحمر بالبحر الأبيض المتوسط.
    
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
