var config = {
    style: 'mapbox://styles/mbatran/ckmhoo9t4jrvj17qklv0kaal3',
    accessToken: 'pk.eyJ1IjoibWJhdHJhbiIsImEiOiJja24wYjc5ZGMwbTIyMnRwZmE4N2RxNzNvIn0.jbX0HTI70wGsM0nMD1ytAQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Tokyo Land Prices Report',
    subtitle: '',
    byline: 'A walkthough Tokyo land prices and land prices change in Tokyo.',
    footer1: `
    <! -- 
Designed and developed by Batran <br>batran@xmap.ai<br>
<div style="text-align:left; padding:10px">
Data Freshness: 令和２年 <br>
Data Source: 都道府県地価調査資料
-->
</div>
    `,
    footer: `
    Thank you,  You can download a PDF report at the end of the page.
    `
    ,    chapters: [
        {
            id: 'tokyo-overlay',
            title: 'Tokyo',
            image: '',
            description:
            `
            Tokyo, the capital of Japan is a home for alomst 14 million resident with an area of 2,194 Km2. <br> <br>
            The metropolitan economy in considered the largest in the world, with a total GDP (nominal) of approximately $1.8 trillion in 2017.
            <br>
            `,
            location: {
                center: [139.17673, 35.69083],
                zoom: 7.97,
                pitch: 0.00,
                bearing: -0.80
                },
            onChapterEnter: [
                {
                    layer: 'tokyo',
                    opacity: 1
                },
                {
                    layer: 'tokyo-label',
                    opacity: 1
                },
                {
                    layer: 'tokyo-pop',
                    opacity: 0
                },
                {
                    layer: 'prices-pts',
                    opacity: 0
                },
                {
                    layer: 'tokyo-schools',
                    opacity: 0
                },
                {
                    layer: 'pop',
                    opacity: 0
                },
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                },
                {
                    layer: 'yoy',
                    opacity: 0
                },
                {
                    layer: 'train',
                    opacity: 0
                },
                {
                    layer: 'yoy-trains',
                    opacity: 0
                },
                {
                    layer: 'yoy-3',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-label',
                    opacity: 0,
                    duration:50000
                },
                {
                    layer: 'tokyo-schools',
                    opacity: 0
                }


             ]
        },
        {
            id: 'tokyo-pop',
            title: 'Tokyo Population Density',
            image: '',
            description:
            `
            The Greater Tokyo Area is the most populous metropolitan area in the world, with more than 37.393 million residents as of 2020 <br> 
            Population density at 6,158 persons per square kilometer <a href="https://www.un.org/en/events/citiesday/assets/pdf/the_worlds_cities_in_2018_data_booklet.pdf"> [Ref]</a>.             
            `,
            location: {
                center: [139.17673, 35.69083],
                zoom: 8.97,
                pitch: 60.00,
                bearing: -0.80
                },
            onChapterEnter: [
                {
                    layer: 'tokyo-pop',
                    opacity: 1
                },
                {
                    layer: 'prices-pts',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'tokyo-pop',
                    opacity: 0
                }
             ]
        },
        {
            id: 'lnd-prices',
            title: 'Land Prices Survey Data ',
            image: 'assets/legend-points.png',
            description:
            `
            The government of Japan announces land price areas every year in July as a  “public data”. The dataset measures land price per square meter across 2,602 different surveying locations across the prefecture. 

            <br><br> In addition to the price, all possible information about the surveyed place are measured too such as distance from the nearest train station, access to water and electricity, width of the road and more. 
                        `,
            location: {
                center: [139.17673, 35.69083],
                zoom: 8.97,
                pitch: 0.00,
                bearing: -0.80
                },
            onChapterEnter: [
                {
                    layer: 'prices-pts',
                    opacity: 1
                },
                {
                    layer: 'tokyo',
                    opacity: .5
                }


            ],
            onChapterExit: [

             ]
        },
        {
            id: 'lng-prices-survey',
            title: 'Most Expensive 5 Areas ',
            image: 'assets/top-prices-transparent.png',
            description:
            `
            The top most expensive areas in Tokyo are Chūō, Chiyoda, Shibuya, Minato and Shinjuku in order. The overall average price in the top 5 areas is 5.4 million JPY per square meters. However, prices change heavily from one area to another depending on the location. 
            `,
            location: {

                center: [139.67600, 35.67379],
                zoom: 12.09,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [

             ]
        },
        {
            id: 'chuo',
            title: 'Chuo Ku ',
            image: 'assets/chuo.png',
            description:
            `
            Chūō is in the central area of Tokyo, surrounded by the five special wards of Chiyoda, Minato, Taitō, Sumida, and Kōtō. <br><br>

            Administratively, Chūō is divided into the three zones of Nihonbashi, Kyobashi and Tsukishima. Nihonbashi and Kyobashi are predominantly commercial areas on the east side of Tokyo Station, and incorporate the famous districts of Ginza and Tsukiji. Tsukishima is a separate island in Tokyo Bay dominated by condominium towers.
                        `,
            location: {

                center: [139.76080, 35.66871],
                zoom: 13.49,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'chuo-hist',
            title: 'Chuo Ku Land price historical change',
            image: 'assets/chuo-hist.png',
            description:
            `
            Chūō is in the central area of Tokyo, surrounded by the five special wards of Chiyoda, Minato, Taitō, Sumida, and Kōtō. <br><br>

            Administratively, Chūō is divided into the three zones of Nihonbashi, Kyobashi and Tsukishima. Nihonbashi and Kyobashi are predominantly commercial areas on the east side of Tokyo Station, and incorporate the famous districts of Ginza and Tsukiji. Tsukishima is a separate island in Tokyo Bay dominated by condominium towers.
                        `,
            location: {

                center: [139.76080, 35.66871],
                zoom: 13.49,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },        
        {
            id: 'chuo-most-expensive',
            title: 'Most Expensive Land Price In Chuo and all Tokyo',
            image: 'assets/top-4.png',
            description:
            `
            Prices across Chuo ku change heavily depending on the location. The top most expensive land price per meter are the following four properties 
            
            <table>
            <tr>
              <th>Address</th>
              <th>Price per Meter 2020</th>
            </tr>
            <tr>
              <td>中央区銀座４－５－６</td>
              <td>57,700,000</td>
            </tr>
            <tr>
              <td>中央区銀座５－４－３</td>
              <td>49,700,000</td>
            </tr>
            <tr>
              <td>中央区銀座２－６－７</td>
              <td>43,300,000</td>
            </tr>
            <tr>
              <td>中央区銀座２－６－７</td>
              <td>42,700,000</td>
            </tr>
          </table>
          

            `,
            location: {

                center: [139.76080, 35.66871],
                zoom: 15.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'chiyoda',
            title: 'Chiyoda Ku ',
            image: 'assets/chiyoda.png',
            description:
            `
            Chiyoda City centers on the moats, gates, and pathways of the Imperial Palace East Gardens and adjoining Kokyo Gaien National Garden. Nippon Budokan hosts rock shows and martial arts tournaments, while the National Theatre stages kabuki plays and bunraku puppetry. Tokyo International Forum is a towering art and culture center. Upscale boutiques and bistros fill the busy commercial district around Tokyo Station. <br>
            Area: 11.66 km²
            <br>
            Population: 66,575 (Jun 1, 2020)
                                    `,
            location: {

                center: [139.73811, 35.68140],
                zoom: 13.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'chiyoda-hist',
            title: 'Chiyoda Ku ',
            image: 'assets/chiyoda-hist.png',
            description:
            `
            Chiyoda City centers on the moats, gates, and pathways of the Imperial Palace East Gardens and adjoining Kokyo Gaien National Garden. Nippon Budokan hosts rock shows and martial arts tournaments, while the National Theatre stages kabuki plays and bunraku puppetry. Tokyo International Forum is a towering art and culture center. Upscale boutiques and bistros fill the busy commercial district around Tokyo Station. <br>
            Area: 11.66 km²
            <br>
            Population: 66,575 (Jun 1, 2020)
                        `,
            location: {

                center: [139.73811, 35.68140],
                zoom: 13.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'shibuya',
            title: 'Shibuya Ku ',
            image: 'assets/shibuya.png',
            description:
            `
            Shibuya is a special ward in Tokyo, Japan. A major commercial and finance center, it houses the two busiest railway stations in the world, Shinjuku Station and Shibuya Station. As of May 1, 2016, it has an estimated population of 221,801 and a population density of 14,679.09 people per km².
                                    `,
            location: {

                center: [139.68434, 35.65239],
                zoom: 13.19,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'shibuya-hist',
            title: 'Shibuya Ku ',
            image: 'assets/shibuya-hist.png',
            description:
            `
            Shibuya is a special ward in Tokyo, Japan. A major commercial and finance center, it houses the two busiest railway stations in the world, Shinjuku Station and Shibuya Station. As of May 1, 2016, it has an estimated population of 221,801 and a population density of 14,679.09 people per km².                        `,
            location: {

                center: [139.68434, 35.65239],
                zoom: 13.19,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'minato',
            title: 'Minato Ku ',
            image: 'assets/minato.png',
            description:
            `
            Minato is a special ward in Tokyo, Japan. It is also called Minato City in English. It was formed in 1947 as a merger of Akasaka, Azabu and Shiba wards following Tokyo City's transformation into Tokyo Metropolis.
                                    `,
            location: {

                center: [139.72434, 35.65239],
                zoom: 12.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'minato-hist',
            title: 'Minato Ku ',
            image: 'assets/minato-hist.png',
            description:
            `
            Minato is a special ward in Tokyo, Japan. It is also called Minato City in English. It was formed in 1947 as a merger of Akasaka, Azabu and Shiba wards following Tokyo City's transformation into Tokyo Metropolis.
                                    `,
            location: {

                center: [139.72434, 35.65239],
                zoom: 12.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'shinjuku',
            title: 'Shinjuku Ku ',
            image: 'assets/shinjuku.png',
            description:
            `
            Shinjuku City encompasses the buzzing clubs and karaoke rooms of neon-lit East Shinjuku and upscale hotel bars and restaurants in the Skyscraper District. Tokyo Metropolitan Building has a popular observation deck, and Mount Hakone rises over tranquil urban parkland. Galleries, theaters, and bookstores attract students from busy campuses. New National Stadium is a high-tech sports venue built for the 2020 Olympics                        `,
            location: {

                center: [139.69434, 35.70239],
                zoom: 12.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'shinjuku-hist',
            title: 'Shinjuku Ku ',
            image: 'assets/shinjuku-hist.png',
            description:
            `
            Shinjuku City encompasses the buzzing clubs and karaoke rooms of neon-lit East Shinjuku and upscale hotel bars and restaurants in the Skyscraper District. Tokyo Metropolitan Building has a popular observation deck, and Mount Hakone rises over tranquil urban parkland. Galleries, theaters, and bookstores attract students from busy campuses. New National Stadium is a high-tech sports venue built for the 2020 Olympics
                                    `,
            location: {

                center: [139.69434, 35.70239],
                zoom: 12.89,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                },
                {
                    layer: 'prices-pts',
                    opacity: 1
                },
                {
                    layer: 'yoy',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'yoy-all',
            title: 'Land Prices Survey Data ',
            image: 'assets/yoy-legend.png',
            description:
            `
            The government of Japan announces land price areas every year in July as a  “public data”. The dataset measures land price per square meter across 2,602 different surveying locations across the prefecture. 

            <br><br> In addition to the price, all possible information about the surveyed place are measured too such as distance from the nearest train station, access to water and electricity, width of the road and more. 
                        `,
            location: {
                center: [139.17673, 35.69083],
                zoom: 8.97,
                pitch: 0.00,
                bearing: -0.80
                },
            onChapterEnter: [
                {
                    layer: 'prices-pts',
                    opacity: 0
                },
                {
                    layer: 'yoy',
                    opacity: 1
                }


            ],
            onChapterExit: [

             ]
        },
        {
            id: 'yoy-top',
            title: 'Land Prices Survey Data ',
            image: 'assets/yoy-top.png',
            description:
            `
            The government of Japan announces land price areas every year in July as a  “public data”. The dataset measures land price per square meter across 2,602 different surveying locations across the prefecture. 

            <br><br> In addition to the price, all possible information about the surveyed place are measured too such as distance from the nearest train station, access to water and electricity, width of the road and more. 
                        `,
            location: {
                center: [139.57673, 35.69083],
                zoom: 10.5,
                pitch: 0.00,
                bearing: -0.80
                },
            onChapterEnter: [
                {
                    layer: 'prices-pts',
                    opacity: 0
                },
                {
                    layer: 'yoy',
                    opacity: 1
                }


            ],
            onChapterExit: [

             ]
        },
        {
            id: 'yoy-bottom',
            title: 'Land Prices Survey Data ',
            image: 'assets/yoy-bottom.png',
            description:
            `
            The government of Japan announces land price areas every year in July as a  “public data”. The dataset measures land price per square meter across 2,602 different surveying locations across the prefecture. 

            <br><br> In addition to the price, all possible information about the surveyed place are measured too such as distance from the nearest train station, access to water and electricity, width of the road and more. 
                        `,
            location: {
                center: [139.07673, 35.69083],
                zoom: 10.0,
                pitch: 0.00,
                bearing: -0.80
                },
            onChapterEnter: [
                {
                    layer: 'prices-pts',
                    opacity: 0
                },
                {
                    layer: 'yoy',
                    opacity: 1
                }


            ],
            onChapterExit: [

             ]
        },
        {
            id: 'yoy-chuo',
            title: 'Chuo YoY ',
            image: 'assets/yoy-legend.png',
            description:
            `
            The government of Japan announces land price areas every year in July as a  “public data”. The dataset measures land price per square meter across 2,602 different surveying locations across the prefecture. 

            <br><br> In addition to the price, all possible information about the surveyed place are measured too such as distance from the nearest train station, access to water and electricity, width of the road and more. 
                        `,
            location: {
                center: [139.76080, 35.66871],
                zoom: 13.49,
                pitch: 45.00,
                bearing: 0.00
                },
            onChapterEnter: [
                {
                    layer: 'prices-pts',
                    opacity: 0
                },
                {
                    layer: 'yoy',
                    opacity: 1
                }


            ],
            onChapterExit: [

             ]
        },
        
        {
            id: 'taito-yoy',
            title: 'Taito YoY ',
            image: 'assets/yoy-legend.png',
            description:
            `
            Chūō is in the central area of Tokyo, surrounded by the five special wards of Chiyoda, Minato, Taitō, Sumida, and Kōtō. <br><br>

            Administratively, Chūō is divided into the three zones of Nihonbashi, Kyobashi and Tsukishima. Nihonbashi and Kyobashi are predominantly commercial areas on the east side of Tokyo Station, and incorporate the famous districts of Ginza and Tsukiji. Tsukishima is a separate island in Tokyo Bay dominated by condominium towers.
                        `,
            location: {

                center: [139.79080, 35.70871],
                zoom: 12.49,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'shibuya-yoy',
            title: 'Shibuya YoY ',
            image: 'assets/yoy-legend.png',
            description:
            `
            Chūō is in the central area of Tokyo, surrounded by the five special wards of Chiyoda, Minato, Taitō, Sumida, and Kōtō. <br><br>

            Administratively, Chūō is divided into the three zones of Nihonbashi, Kyobashi and Tsukishima. Nihonbashi and Kyobashi are predominantly commercial areas on the east side of Tokyo Station, and incorporate the famous districts of Ginza and Tsukiji. Tsukishima is a separate island in Tokyo Bay dominated by condominium towers.
                        `,
            location: {

                center: [139.68434, 35.65239],
                zoom: 13.19,
                pitch: 45.00,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'tokyo-bound',
                    opacity: .5
                },
                {
                    layer: 'train',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'tokyo-bound',
                    opacity: 0
                }

             ]
        },
        {
            id: 'Chuo-line',
            title: 'Chuo x Denentoshi Line ',
            image: 'assets/yoy-legend.png',
            description:
            `
            Chuo line and denentoshi line are  

            Denentoshi Line
            `,
            location: {

                center: [139.58434, 35.65239],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'train',
                    opacity: 1
                }


            ],
            onChapterExit: [

             ]
        },
        {
            id: 'chuo-line-only',
            title: 'Chuo x Denentoshi Line ',
            image: 'assets/yoy-legend.png',
            description:
            `
            Price per meter along Chuo and Denentoshi line apprechiated on average 5% every year. 

            Denentoshi Line
            `,
            location: {

                center: [139.58434, 35.65239],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'yoy-trains',
                    opacity: 1
                },
                {
                    layer: 'yoy',
                    opacity: 0
                }


            ],
            onChapterExit: [

             ]
        },
        {
            id: 'price-vs-yoy',
            title: 'Price vs YoY ',
            image: 'assets/price-vs-yoy.png',
            description:
            `
             There are manu factors that can cause land price appreciation. Price per meter can be an indication of the land appreciation in the future. There is  45% correlation between price per meter and YoY increase. The heigher price per meter the more chances it will have a big YoY appreciation in the following years. 
             <br> <br> 
            We looked at all land prices that appreciated more than 3% YoY in the past five years. The probability of land prices appreciation based on the price per meter is explained below: <br>
            `,
            location: {

                center: [139.58434, 35.65239],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
                        },
            onChapterEnter: [
                {
                    layer: 'yoy-trains',
                    opacity: 0
                },
                {
                    layer: 'train',
                    opacity: 0
                },
                {
                    layer: 'yoy-3',
                    opacity: 1
                }


            ],
            onChapterExit: [
             ]
            }

    ]
};
