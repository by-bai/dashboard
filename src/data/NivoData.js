const nivoBarData = [
    {
        country: 'AD',
        'hot dog': 137,
        'hot dogColor': 'hsl(102, 70%, 50%)',
        burger: 41,
        burgerColor: 'hsl(319, 70%, 50%)',
        sandwich: 21,
        sandwichColor: 'hsl(21, 70%, 50%)',
        kebab: 7,
        kebabColor: 'hsl(141, 70%, 50%)',
        fries: 191,
        friesColor: 'hsl(60, 70%, 50%)',
        donut: 90,
        donutColor: 'hsl(191, 70%, 50%)',
    },
    {
        country: 'AE',
        'hot dog': 156,
        'hot dogColor': 'hsl(274, 70%, 50%)',
        burger: 92,
        burgerColor: 'hsl(107, 70%, 50%)',
        sandwich: 59,
        sandwichColor: 'hsl(141, 70%, 50%)',
        kebab: 134,
        kebabColor: 'hsl(340, 70%, 50%)',
        fries: 150,
        friesColor: 'hsl(214, 70%, 50%)',
        donut: 147,
        donutColor: 'hsl(260, 70%, 50%)',
    },
    {
        country: 'AF',
        'hot dog': 75,
        'hot dogColor': 'hsl(178, 70%, 50%)',
        burger: 167,
        burgerColor: 'hsl(148, 70%, 50%)',
        sandwich: 30,
        sandwichColor: 'hsl(137, 70%, 50%)',
        kebab: 144,
        kebabColor: 'hsl(277, 70%, 50%)',
        fries: 66,
        friesColor: 'hsl(170, 70%, 50%)',
        donut: 170,
        donutColor: 'hsl(170, 70%, 50%)',
    },
    {
        country: 'AG',
        'hot dog': 131,
        'hot dogColor': 'hsl(269, 70%, 50%)',
        burger: 167,
        burgerColor: 'hsl(215, 70%, 50%)',
        sandwich: 183,
        sandwichColor: 'hsl(4, 70%, 50%)',
        kebab: 134,
        kebabColor: 'hsl(209, 70%, 50%)',
        fries: 43,
        friesColor: 'hsl(319, 70%, 50%)',
        donut: 7,
        donutColor: 'hsl(142, 70%, 50%)',
    },
    {
        country: 'AI',
        'hot dog': 105,
        'hot dogColor': 'hsl(101, 70%, 50%)',
        burger: 56,
        burgerColor: 'hsl(228, 70%, 50%)',
        sandwich: 88,
        sandwichColor: 'hsl(34, 70%, 50%)',
        kebab: 125,
        kebabColor: 'hsl(44, 70%, 50%)',
        fries: 181,
        friesColor: 'hsl(329, 70%, 50%)',
        donut: 113,
        donutColor: 'hsl(31, 70%, 50%)',
    },
    {
        country: 'AL',
        'hot dog': 60,
        'hot dogColor': 'hsl(352, 70%, 50%)',
        burger: 92,
        burgerColor: 'hsl(309, 70%, 50%)',
        sandwich: 18,
        sandwichColor: 'hsl(255, 70%, 50%)',
        kebab: 163,
        kebabColor: 'hsl(90, 70%, 50%)',
        fries: 169,
        friesColor: 'hsl(254, 70%, 50%)',
        donut: 183,
        donutColor: 'hsl(154, 70%, 50%)',
    },
    {
        country: 'AM',
        'hot dog': 43,
        'hot dogColor': 'hsl(145, 70%, 50%)',
        burger: 171,
        burgerColor: 'hsl(301, 70%, 50%)',
        sandwich: 127,
        sandwichColor: 'hsl(207, 70%, 50%)',
        kebab: 95,
        kebabColor: 'hsl(251, 70%, 50%)',
        fries: 9,
        friesColor: 'hsl(303, 70%, 50%)',
        donut: 68,
        donutColor: 'hsl(220, 70%, 50%)',
    },
];

const nivoLineData = [
    {
        id: 'japan',
        color: 'hsl(153, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 51,
            },
            {
                x: 'helicopter',
                y: 258,
            },
            {
                x: 'boat',
                y: 69,
            },
            {
                x: 'train',
                y: 108,
            },
            {
                x: 'subway',
                y: 163,
            },
            {
                x: 'bus',
                y: 68,
            },
            {
                x: 'car',
                y: 38,
            },
            {
                x: 'moto',
                y: 202,
            },
            {
                x: 'bicycle',
                y: 92,
            },
            {
                x: 'horse',
                y: 129,
            },
            {
                x: 'skateboard',
                y: 169,
            },
            {
                x: 'others',
                y: 128,
            },
        ],
    },
    {
        id: 'france',
        color: 'hsl(193, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 210,
            },
            {
                x: 'helicopter',
                y: 133,
            },
            {
                x: 'boat',
                y: 87,
            },
            {
                x: 'train',
                y: 213,
            },
            {
                x: 'subway',
                y: 121,
            },
            {
                x: 'bus',
                y: 177,
            },
            {
                x: 'car',
                y: 46,
            },
            {
                x: 'moto',
                y: 133,
            },
            {
                x: 'bicycle',
                y: 111,
            },
            {
                x: 'horse',
                y: 290,
            },
            {
                x: 'skateboard',
                y: 160,
            },
            {
                x: 'others',
                y: 37,
            },
        ],
    },
    {
        id: 'us',
        color: 'hsl(24, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 229,
            },
            {
                x: 'helicopter',
                y: 174,
            },
            {
                x: 'boat',
                y: 61,
            },
            {
                x: 'train',
                y: 36,
            },
            {
                x: 'subway',
                y: 173,
            },
            {
                x: 'bus',
                y: 56,
            },
            {
                x: 'car',
                y: 209,
            },
            {
                x: 'moto',
                y: 12,
            },
            {
                x: 'bicycle',
                y: 101,
            },
            {
                x: 'horse',
                y: 152,
            },
            {
                x: 'skateboard',
                y: 194,
            },
            {
                x: 'others',
                y: 165,
            },
        ],
    },
    {
        id: 'germany',
        color: 'hsl(16, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 260,
            },
            {
                x: 'helicopter',
                y: 235,
            },
            {
                x: 'boat',
                y: 126,
            },
            {
                x: 'train',
                y: 204,
            },
            {
                x: 'subway',
                y: 47,
            },
            {
                x: 'bus',
                y: 2,
            },
            {
                x: 'car',
                y: 26,
            },
            {
                x: 'moto',
                y: 60,
            },
            {
                x: 'bicycle',
                y: 291,
            },
            {
                x: 'horse',
                y: 63,
            },
            {
                x: 'skateboard',
                y: 164,
            },
            {
                x: 'others',
                y: 113,
            },
        ],
    },
    {
        id: 'norway',
        color: 'hsl(331, 70%, 50%)',
        data: [
            {
                x: 'plane',
                y: 215,
            },
            {
                x: 'helicopter',
                y: 106,
            },
            {
                x: 'boat',
                y: 264,
            },
            {
                x: 'train',
                y: 266,
            },
            {
                x: 'subway',
                y: 79,
            },
            {
                x: 'bus',
                y: 272,
            },
            {
                x: 'car',
                y: 139,
            },
            {
                x: 'moto',
                y: 181,
            },
            {
                x: 'bicycle',
                y: 145,
            },
            {
                x: 'horse',
                y: 132,
            },
            {
                x: 'skateboard',
                y: 255,
            },
            {
                x: 'others',
                y: 41,
            },
        ],
    },
];

const nivoPieData = [
    {
        id: 'hack',
        label: 'hack',
        value: 167,
        color: 'hsl(270, 70%, 50%)',
    },
    {
        id: 'erlang',
        label: 'erlang',
        value: 188,
        color: 'hsl(201, 70%, 50%)',
    },
    {
        id: 'elixir',
        label: 'elixir',
        value: 255,
        color: 'hsl(334, 70%, 50%)',
    },
    {
        id: 'stylus',
        label: 'stylus',
        value: 395,
        color: 'hsl(323, 70%, 50%)',
    },
    {
        id: 'lisp',
        label: 'lisp',
        value: 450,
        color: 'hsl(30, 70%, 50%)',
    },
];

export { nivoBarData, nivoLineData, nivoPieData };
