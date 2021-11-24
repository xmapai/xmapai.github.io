var config = {
    style: 'mapbox://styles/mbatran/ckw3cw8vq2k2n14rxvog1sb3p',
    accessToken: 'pk.eyJ1IjoibWJhdHJhbiIsImEiOiJja24wYjc5ZGMwbTIyMnRwZmE4N2RxNzNvIn0.jbX0HTI70wGsM0nMD1ytAQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Oxagon - オキサゴン - サウジアラビアの工業団地',
    subtitle: '',
    byline: 'ビジュアル・データ・アナリティクス',
    footer: `
    Designed and developed by  <a href="https://www.mohamedbatran.com" target="_blank" > Batran</a>
    `
    ,    chapters: [
        {
            id: '01_saudi',
            title: 'Oxagon - サウジアラビアの工業団地',
            image: 'assets/mobile/oxagon_photo.png',
            description:
            `
            <br>  
            2021年11月17日、サウジアラビアは「<a href="https://www.neom.com/en-us/regions/oxagon">オキサゴン</a>」という新しい野心的なインダストリアル・プロジェクトを発表しました。
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
                title: 'オキサゴン サウジアラビアの位置',
                image: 'assets/mobile/legend_saudi_oxagon.png',
                description:
                `
                サウジアラビア北西部の紅海沿いに、世界的な物流拠点となる水上都市を建設します。
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
                title: 'オキサゴン」という名前の由来"',
                image: 'assets/mobile/oxagon_shape.png',
                description:
                `

                オキサゴンという名前は、2つの部分から構成されています。酸素を意味する "Ox "と、多角形を意味する "Gon "です。この名前に込められたメッセージは、環境に優しく、持続可能性を重視しながら、産業の革新と効率性を重視することです。

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
    title: 'オキサゴン」という名前の由来',
    description:
    `
    半分が陸、半分が海に建設されたこの工業団地は、8面48平方キロメートルのイノベーションハブとなります。
    
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
    title: 'NEOMへの立地',
    image: 'assets/mobile/neom_oxagon.png',

    description:
    `
    オキサゴン工業団地は、未来都市のすぐ南側に位置するNEOMプロジェクトの一部です。
    
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
    title: 'THE LINEからのロケーション',
    image: 'assets/mobile/oxagon_line.png',
    description:
    `
    オキサゴン工業団地は、線路沿いの最も近い地点から約50km、両端からは約100km～120kmの距離に位置します。
    
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
        title: 'サウジアラビアの主要都市からの位置',
        image: 'assets/mobile/major_cities.png',
        description:
        `
        オキサゴンは、タブークから150km、ジッダから800km、メッカから800km、マディーナから550km、首都リアドから1300kmの距離にあります。
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
    title: '半径200km以内の住民',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    サウジアラビアには3,480万人の住民がおり、様々な地域に住んでいます。浮遊都市はNEOMの一部であり、現在の居住者の多くを引き付けることになる。オキサゴンから200km圏内には、2021年時点で約23万人が居住しています。
    
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
    title: '500Km圏内の住民',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    約55万人がオキサゴンから500km圏内に居住。

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
    title: '750km圏内の居住者',
    image: 'assets/mobile/pop_legend.png',
    description:
    `
    オキサゴンから750Km以内に約170万人が居住

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
        title: '1500km圏内の住民',
        image: 'assets/mobile/pop_legend.png',
        description:
        `
        約2,000万人がオキサゴンから750Km以内に居住
        
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
        title: '戦略的立地',
        description:
        `
        オキサゴンは紅海沿いに位置しています。世界貿易の約13%が紅海を通過しています。最先端の統合された港と空港を持つ、世界で最も技術的に進んだ物流拠点の一つとして位置づけられています。

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
    title: 'スエズ運河からの距離',
    image: 'assets/mobile/suez.png',
    description:
    `
    オキサゴンは、紅海と地中海を結ぶスエズ運河から約400kmの距離にあります。
    
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
