/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'seccut_bg',
                            type: 'image',
                            rect: ['0px', '0px', '374px', '226px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"84411601114450.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '374px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'top_word',
                            display: 'none',
                            type: 'image',
                            rect: ['121px', '10px', '245px', '17px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"661548788_03.jpg",'0px','0px']
                        },
                        {
                            id: 'seccut_btn',
                            display: 'block',
                            type: 'image',
                            rect: ['-123px', '170px', '30px', '8px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"5201514021478_07.png",'0px','0px'],
                            boxShadow: ["", 0, 0, 5, 2, "rgba(0,0,0,0.65098)"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'btn_word',
                            type: 'image',
                            rect: ['-112px', '171px', '68px', '15px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"85497985015152_03.png",'0px','0px']
                        },
                        {
                            id: 'trigle',
                            type: 'image',
                            rect: ['95px', '172px', '2px', '3px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"514501201545485_05.png",'0px','0px']
                        },
                        {
                            id: 'title2',
                            type: 'image',
                            rect: ['55px', '111px', '54px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"5201514021478_03.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'onecut_bg',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '374px', '226px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"15888874744445.jpg",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['5px', '8px', '77px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"8774874152120021_03.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['384px', '32px', '176px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'title1',
                            display: 'block',
                            type: 'image',
                            rect: ['251px', '42px', '48px', '7px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"45100141414_10.png",'0px','0px']
                        },
                        {
                            id: 'subtitle1',
                            display: 'block',
                            type: 'image',
                            rect: ['234px', '10px', '79px', '9px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"45100141414_03.png",'0px','0px']
                        },
                        {
                            id: 'thirbtn',
                            type: 'image',
                            rect: ['-123px', '155px', '110px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5201514021478_07.png",'0px','0px'],
                            boxShadow: ["", 0, 3, 5, 2, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'title3',
                            type: 'image',
                            rect: ['64px', '119px', '35px', '17px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"89895612100_03.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'btn_word2',
                            type: 'image',
                            rect: ['-116px', '162px', '67px', '16px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"514501201545485_03.png",'0px','0px']
                        },
                        {
                            id: 'trigle2',
                            display: 'block',
                            type: 'image',
                            rect: ['-39px', '162px', '9px', '16px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"514501201545485_05.png",'0px','0px']
                        },
                        {
                            id: 'trigle2Copy2',
                            display: 'none',
                            type: 'image',
                            rect: ['-27px', '162px', '9px', '16px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"514501201545485_05.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '374px', '226px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8626,
                    autoPlay: true,
                    data: [
                        [
                            "eid262",
                            "display",
                            4233,
                            0,
                            "easeInBack",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "left",
                            4750,
                            500,
                            "easeInBack",
                            "${seccut_btn}",
                            '-123px',
                            '27px'
                        ],
                        [
                            "eid255",
                            "left",
                            6000,
                            500,
                            "easeInBack",
                            "${seccut_btn}",
                            '27px',
                            '67px'
                        ],
                        [
                            "eid79",
                            "left",
                            750,
                            1000,
                            "easeInBounce",
                            "${subtitle1}",
                            '234px',
                            '198px'
                        ],
                        [
                            "eid124",
                            "left",
                            3733,
                            500,
                            "easeInBack",
                            "${subtitle1}",
                            '198px',
                            '-177px'
                        ],
                        [
                            "eid361",
                            "opacity",
                            4750,
                            0,
                            "easeInBack",
                            "${trigle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid431",
                            "opacity",
                            6000,
                            500,
                            "easeInBack",
                            "${trigle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid283",
                            "width",
                            6250,
                            435,
                            "easeInBack",
                            "${title3}",
                            '35px',
                            '127px'
                        ],
                        [
                            "eid122",
                            "left",
                            3733,
                            500,
                            "easeInBack",
                            "${logo}",
                            '14px',
                            '-361px'
                        ],
                        [
                            "eid308",
                            "left",
                            4233,
                            0,
                            "easeInBack",
                            "${logo}",
                            '-361px',
                            '5px'
                        ],
                        [
                            "eid204",
                            "filter.blur",
                            4500,
                            500,
                            "easeInBack",
                            "${title2}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid430",
                            "top",
                            6000,
                            500,
                            "easeInBack",
                            "${btn_word}",
                            '162px',
                            '171px'
                        ],
                        [
                            "eid252",
                            "height",
                            6000,
                            500,
                            "easeInBack",
                            "${seccut_btn}",
                            '29px',
                            '8px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            250,
                            750,
                            "easeInSine",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "filter.blur",
                            6250,
                            435,
                            "easeInBack",
                            "${title3}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid50",
                            "width",
                            1500,
                            1000,
                            "easeInBounce",
                            "${title1}",
                            '48px',
                            '145px'
                        ],
                        [
                            "eid417",
                            "width",
                            6000,
                            500,
                            "easeInBack",
                            "${trigle}",
                            '9px',
                            '2px'
                        ],
                        [
                            "eid558",
                            "opacity",
                            6500,
                            0,
                            "easeInBack",
                            "${trigle2Copy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid530",
                            "opacity",
                            7250,
                            129,
                            "linear",
                            "${trigle2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid531",
                            "opacity",
                            7379,
                            121,
                            "linear",
                            "${trigle2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid532",
                            "opacity",
                            7500,
                            128,
                            "linear",
                            "${trigle2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid533",
                            "opacity",
                            7628,
                            122,
                            "linear",
                            "${trigle2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "top",
                            4233,
                            0,
                            "easeInBack",
                            "${logo}",
                            '14px',
                            '8px'
                        ],
                        [
                            "eid253",
                            "top",
                            6000,
                            500,
                            "easeInBack",
                            "${seccut_btn}",
                            '155px',
                            '170px'
                        ],
                        [
                            "eid260",
                            "display",
                            4233,
                            0,
                            "easeInBack",
                            "${subtitle1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "left",
                            4750,
                            500,
                            "easeInBack",
                            "${btn_word}",
                            '-112px',
                            '39px'
                        ],
                        [
                            "eid429",
                            "left",
                            6000,
                            500,
                            "easeInBack",
                            "${btn_word}",
                            '39px',
                            '73px'
                        ],
                        [
                            "eid286",
                            "opacity",
                            6250,
                            435,
                            "easeInBack",
                            "${title3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid442",
                            "left",
                            6500,
                            500,
                            "easeInBack",
                            "${trigle2}",
                            '-39px',
                            '113px'
                        ],
                        [
                            "eid414",
                            "height",
                            6000,
                            500,
                            "easeInBack",
                            "${btn_word}",
                            '16px',
                            '4px'
                        ],
                        [
                            "eid77",
                            "top",
                            750,
                            1000,
                            "easeInBounce",
                            "${subtitle1}",
                            '15px',
                            '10px'
                        ],
                        [
                            "eid415",
                            "width",
                            6000,
                            500,
                            "easeInBack",
                            "${btn_word}",
                            '72px',
                            '20px'
                        ],
                        [
                            "eid553",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${trigle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid554",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${trigle2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid552",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${trigle2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid551",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${trigle2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid555",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${trigle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid546",
                            "display",
                            8122,
                            0,
                            "easeInBack",
                            "${trigle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid547",
                            "display",
                            8250,
                            0,
                            "easeInBack",
                            "${trigle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid548",
                            "display",
                            8377,
                            0,
                            "easeInBack",
                            "${trigle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid549",
                            "display",
                            8500,
                            0,
                            "easeInBack",
                            "${trigle2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "display",
                            8626,
                            0,
                            "easeInBack",
                            "${trigle2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "opacity",
                            6000,
                            500,
                            "easeInBack",
                            "${btn_word}",
                            '1',
                            '0'
                        ],
                        [
                            "eid197",
                            "top",
                            4500,
                            500,
                            "easeInBack",
                            "${title2}",
                            '107px',
                            '93px'
                        ],
                        [
                            "eid245",
                            "top",
                            6000,
                            500,
                            "easeInBack",
                            "${title2}",
                            '93px',
                            '111px'
                        ],
                        [
                            "eid200",
                            "opacity",
                            4500,
                            500,
                            "easeInBack",
                            "${title2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            6000,
                            500,
                            "easeInBack",
                            "${title2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid268",
                            "left",
                            6500,
                            500,
                            "easeInBack",
                            "${thirbtn}",
                            '-123px',
                            '28px'
                        ],
                        [
                            "eid313",
                            "display",
                            0,
                            0,
                            "easeInBack",
                            "${top_word}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            3733,
                            0,
                            "easeInBack",
                            "${top_word}",
                            'none',
                            'block'
                        ],
                        [
                            "eid512",
                            "filter.invert",
                            7250,
                            129,
                            "linear",
                            "${thirbtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid513",
                            "filter.invert",
                            7379,
                            121,
                            "linear",
                            "${thirbtn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid514",
                            "filter.invert",
                            7500,
                            128,
                            "linear",
                            "${thirbtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid515",
                            "filter.invert",
                            7628,
                            122,
                            "linear",
                            "${thirbtn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid281",
                            "height",
                            6250,
                            435,
                            "easeInBack",
                            "${title3}",
                            '17px',
                            '62px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            750,
                            "easeInSine",
                            "${onecut_bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "width",
                            4500,
                            500,
                            "easeInBack",
                            "${title2}",
                            '54px',
                            '149px'
                        ],
                        [
                            "eid246",
                            "width",
                            6000,
                            500,
                            "easeInBack",
                            "${title2}",
                            '149px',
                            '54px'
                        ],
                        [
                            "eid540",
                            "display",
                            8000,
                            0,
                            "easeInBack",
                            "${trigle2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid541",
                            "display",
                            8122,
                            0,
                            "easeInBack",
                            "${trigle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid542",
                            "display",
                            8250,
                            0,
                            "easeInBack",
                            "${trigle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "display",
                            8377,
                            0,
                            "easeInBack",
                            "${trigle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid544",
                            "display",
                            8500,
                            0,
                            "easeInBack",
                            "${trigle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "left",
                            4750,
                            500,
                            "easeInBack",
                            "${trigle}",
                            '-33px',
                            '118px'
                        ],
                        [
                            "eid421",
                            "left",
                            6000,
                            500,
                            "easeInBack",
                            "${trigle}",
                            '118px',
                            '95px'
                        ],
                        [
                            "eid51",
                            "left",
                            1500,
                            1000,
                            "easeInBounce",
                            "${title1}",
                            '251px',
                            '202px'
                        ],
                        [
                            "eid125",
                            "left",
                            3733,
                            500,
                            "easeInBack",
                            "${title1}",
                            '202px',
                            '-173px'
                        ],
                        [
                            "eid254",
                            "width",
                            6000,
                            500,
                            "easeInBack",
                            "${seccut_btn}",
                            '110px',
                            '30px'
                        ],
                        [
                            "eid27",
                            "left",
                            1250,
                            500,
                            "easeInBack",
                            "${Rectangle}",
                            '384px',
                            '186px'
                        ],
                        [
                            "eid126",
                            "left",
                            3733,
                            500,
                            "easeInBack",
                            "${Rectangle}",
                            '186px',
                            '-189px'
                        ],
                        [
                            "eid76",
                            "height",
                            750,
                            1000,
                            "easeInBounce",
                            "${subtitle1}",
                            '9px',
                            '17px'
                        ],
                        [
                            "eid263",
                            "display",
                            4233,
                            0,
                            "easeInBack",
                            "${onecut_bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "height",
                            1500,
                            1000,
                            "easeInBounce",
                            "${title1}",
                            '7px',
                            '20px'
                        ],
                        [
                            "eid199",
                            "left",
                            4500,
                            500,
                            "easeInBack",
                            "${title2}",
                            '55px',
                            '8px'
                        ],
                        [
                            "eid247",
                            "left",
                            6000,
                            500,
                            "easeInBack",
                            "${title2}",
                            '8px',
                            '55px'
                        ],
                        [
                            "eid539",
                            "opacity",
                            6500,
                            0,
                            "easeInBack",
                            "${trigle2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid489",
                            "opacity",
                            7250,
                            129,
                            "linear",
                            "${trigle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid490",
                            "opacity",
                            7379,
                            121,
                            "linear",
                            "${trigle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            7500,
                            128,
                            "linear",
                            "${trigle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid479",
                            "opacity",
                            7628,
                            122,
                            "linear",
                            "${trigle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "width",
                            750,
                            1000,
                            "easeInBounce",
                            "${subtitle1}",
                            '79px',
                            '149px'
                        ],
                        [
                            "eid441",
                            "left",
                            6500,
                            500,
                            "easeInBack",
                            "${btn_word2}",
                            '-116px',
                            '36px'
                        ],
                        [
                            "eid287",
                            "left",
                            0,
                            0,
                            "linear",
                            "${seccut_bg}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "top",
                            1500,
                            1000,
                            "easeInBounce",
                            "${title1}",
                            '42px',
                            '36px'
                        ],
                        [
                            "eid123",
                            "left",
                            3733,
                            500,
                            "easeInBack",
                            "${onecut_bg}",
                            '0px',
                            '-375px'
                        ],
                        [
                            "eid428",
                            "top",
                            6000,
                            500,
                            "easeInBack",
                            "${trigle}",
                            '162px',
                            '172px'
                        ],
                        [
                            "eid516",
                            "opacity",
                            7250,
                            129,
                            "linear",
                            "${btn_word2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid517",
                            "opacity",
                            7379,
                            121,
                            "linear",
                            "${btn_word2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid518",
                            "opacity",
                            7500,
                            128,
                            "linear",
                            "${btn_word2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid519",
                            "opacity",
                            7628,
                            122,
                            "linear",
                            "${btn_word2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid289",
                            "width",
                            4233,
                            0,
                            "easeInBack",
                            "${logo}",
                            '162px',
                            '77px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            1500,
                            1000,
                            "easeInBounce",
                            "${title1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid259",
                            "opacity",
                            0,
                            3951,
                            "easeInBack",
                            "${seccut_bg}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid161",
                            "opacity",
                            3951,
                            282,
                            "easeInBounce",
                            "${seccut_bg}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid282",
                            "top",
                            6250,
                            435,
                            "easeInBack",
                            "${title3}",
                            '119px',
                            '80px'
                        ],
                        [
                            "eid257",
                            "display",
                            6500,
                            0,
                            "easeInBack",
                            "${seccut_btn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid265",
                            "top",
                            6500,
                            0,
                            "easeInBack",
                            "${thirbtn}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid267",
                            "top",
                            7000,
                            0,
                            "easeInBack",
                            "${thirbtn}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid256",
                            "opacity",
                            6000,
                            500,
                            "easeInBack",
                            "${seccut_btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "height",
                            4500,
                            500,
                            "easeInBack",
                            "${title2}",
                            '17px',
                            '47px'
                        ],
                        [
                            "eid244",
                            "height",
                            6000,
                            500,
                            "easeInBack",
                            "${title2}",
                            '47px',
                            '17px'
                        ],
                        [
                            "eid23",
                            "filter.blur",
                            250,
                            750,
                            "easeInSine",
                            "${logo}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid261",
                            "display",
                            4233,
                            0,
                            "easeInBack",
                            "${title1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "opacity",
                            750,
                            1000,
                            "easeInBounce",
                            "${subtitle1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid290",
                            "height",
                            4233,
                            0,
                            "easeInBack",
                            "${logo}",
                            '47px',
                            '22px'
                        ],
                        [
                            "eid284",
                            "left",
                            6250,
                            435,
                            "easeInBack",
                            "${title3}",
                            '64px',
                            '20px'
                        ],
                        [
                            "eid416",
                            "height",
                            6000,
                            500,
                            "easeInBack",
                            "${trigle}",
                            '16px',
                            '3px'
                        ],
                        [
                            "eid529",
                            "left",
                            6500,
                            500,
                            "easeInBack",
                            "${trigle2Copy2}",
                            '-27px',
                            '124px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("20161220_3muses_edgeActions.js");
})("EDGE-55197529");
