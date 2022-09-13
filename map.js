export const mapInfo = {
    minX: 0,
    minY: 0,
    maxX: 64,
    maxY: 64,
    minZ: -7,
    maxZ: 8,
};

const finalMap = {};

const tileItems = {
    '2:3:0': {
        items: ['fields:Poison']
    },
    '6:4:0': {
        items: ['terrain:GroundSpikes']
    },
    '7:4:0': {
        items: ['monster:Criatura.sapo']
    },
    '10:4:0': {
        items: ['monster:Criatura.galinha']
    },
    '13:7:0': {
        items: ['monster:Criatura.snake']
    },
    '1:7:0': {
        items: ['monster:Criatura.croc']
    },
    '1:10:0': {
        items: ['monster:Criatura.cobra']
    },
};

const lake = {
    '5:5:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopLeftCorner',
        ]
    },
    '5:6:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.LeftBorder1',
        ]
    },
    '5:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomLeftCorner',
        ]
    },
    '6:5:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopBorder1',
        ]
    },
    '6:6:0': {
        items: ['tiles:Water',]
    },
    '6:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomBorder1',
        ]
    },
    '7:5:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopRightCorner',
        ]
    },
    '7:6:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopRightTip',
        ]
    },
    '7:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomBorder2',
        ]
    },
    '8:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomRightCorner',
        ]
    },
    '8:6:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopRightCorner',
        ]
    },
};

const sand = {
    /* -- borders -- */
    '7:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopLeftTip',
        ]
    },
    '8:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '9:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '10:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '11:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '12:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopRightTip',
        ]
    },
    '12:9:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.RightBorder',
        ]
    },
    '12:10:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomLeftTip',
        ]
    },
    '11:10:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopLeftCorner',
        ]
    },
    '11:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomLeftTip',
        ]
    },
    '10:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomBorder',
        ]
    },
    '9:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomBorder',
        ]
    },
    '8:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomBorder',
        ]
    },
    '7:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomRightTip',
        ]
    },
    '7:10:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.LeftBorder',
        ]
    },
    '7:9:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.LeftBorder',
        ]
    },
    /* -- inside -- */
    '8:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '9:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '10:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '11:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '8:10:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '9:10:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '10:10:0': {
        items: [
            'tiles:Sand',
        ]
    },
};

const ice = {
    '34:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'34:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'35:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'36:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'37:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'38:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'39:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'40:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'41:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'42:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'43:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'44:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'45:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'46:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'47:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'48:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'49:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'50:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'51:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'52:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'53:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'54:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'55:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'56:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'57:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'58:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'59:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'60:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'61:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'62:30:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:0:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:1:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:2:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:3:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:4:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:5:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:6:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:7:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:8:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:9:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:10:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:11:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:12:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:13:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:14:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:15:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:16:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:17:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:18:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:19:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:20:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:21:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:22:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:23:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:24:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:25:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:26:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:27:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:28:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:29:0': {
		items: [
			'tiles:Ice',
		]
	},

	'63:30:0': {
		items: [
			'tiles:Ice',
		]
	},

};

const lava = {
    '0:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'0:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'1:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'2:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'3:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'4:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'5:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'6:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'7:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'8:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'9:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'10:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'11:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'12:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'13:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'14:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'15:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'16:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'17:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'18:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'19:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'20:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'21:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'22:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'23:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'24:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'25:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'26:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'27:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'28:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'29:63:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:34:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:35:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:36:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:37:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:38:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:39:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:40:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:41:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:42:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:43:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:44:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:45:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:46:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:47:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:48:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:49:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:50:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:51:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:52:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:53:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:54:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:55:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:56:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:57:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:58:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:59:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:60:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:61:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:62:0': {
		items: [
			'tiles:Lava',
		]
	},

	'30:63:0': {
		items: [
			'tiles:Lava',
		]
	},
};

const beach_sand = {
	'34:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'34:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'35:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'36:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'37:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'38:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'39:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'40:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'41:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'42:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'43:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'44:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'45:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'46:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'47:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'48:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'49:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'50:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'51:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'52:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'53:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'54:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'55:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'56:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'57:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'58:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'59:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'60:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'61:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'62:63:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:34:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:35:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:36:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:37:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:38:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:39:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:40:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:41:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:42:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:43:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:44:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:45:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:46:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:47:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:48:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:49:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:50:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:51:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:52:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:53:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:54:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:55:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:56:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:57:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:58:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:59:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:60:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:61:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:62:0': {
		items: [
			'tiles:Sand',
		]
	},
	'63:63:0': {
		items: [
			'tiles:Sand',
		]
	},
}

const walls = {
	'31:0:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:1:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:2:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:3:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:4:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:5:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:6:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:7:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:8:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:9:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:10:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:11:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:12:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:13:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:14:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:15:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:16:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:17:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:18:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:19:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:20:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:21:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:22:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:23:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:24:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:25:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:26:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:27:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:28:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:29:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:30:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:31:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'31:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'31:33:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'31:34:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:35:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:36:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:37:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:38:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:39:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:40:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:41:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:42:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:43:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:44:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:45:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:46:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:47:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:48:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:49:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:50:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:51:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:52:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:53:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:54:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:55:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:56:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:57:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:58:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:59:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:60:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:61:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:62:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'31:63:0': {
		items: [
			'tiles:WallBorder.tetoCavernaDireita',
		]
	},
	'32:0:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:1:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:2:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:3:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:4:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:5:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:6:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:7:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:8:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:9:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:10:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:11:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:12:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:13:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:14:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:15:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:16:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:17:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:18:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:19:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:20:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:21:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:22:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:23:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:24:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:25:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:26:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:27:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:28:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:29:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:30:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:31:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:33:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:34:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:35:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:36:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:37:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:38:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:39:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:40:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:41:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:42:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:43:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:44:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:45:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:46:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:47:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:48:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:49:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:50:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:51:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:52:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:53:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:54:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:55:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:56:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:57:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:58:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:59:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:60:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:61:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:62:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'32:63:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'33:0:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:1:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:2:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:3:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:4:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:5:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:6:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:7:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:8:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:9:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:10:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:11:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:12:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:13:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:14:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:15:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:16:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:17:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:18:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:19:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:20:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:21:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:22:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:23:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:24:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:25:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:26:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:27:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:28:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:29:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:30:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:31:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'33:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'33:33:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'33:34:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:35:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:36:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:37:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:38:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:39:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:40:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:41:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:42:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:43:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:44:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:45:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:46:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:47:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:48:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:49:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:50:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:51:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:52:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:53:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:54:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:55:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:56:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:57:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:58:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:59:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:60:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:61:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:62:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'33:63:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda',
		]
	},
	'0:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'1:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'2:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'3:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'4:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'5:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'6:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'7:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'8:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'9:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'10:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'11:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'12:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'13:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'14:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'15:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'16:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'17:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'18:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'19:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'20:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'21:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'22:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'23:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'24:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'25:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'26:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'27:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'28:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'29:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'30:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'0:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'1:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'2:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'3:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'4:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'5:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'6:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'7:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'8:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'9:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'10:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'11:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'12:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'13:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'14:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'15:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'16:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'17:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'18:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'19:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'20:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'21:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'22:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'23:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'24:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'25:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'26:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'27:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'28:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'29:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'30:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'0:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'1:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'2:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'3:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'4:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'5:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'6:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'7:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'8:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'9:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'10:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'11:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'12:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'13:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'14:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'15:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'16:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'17:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'18:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'19:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'20:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'21:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'22:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'23:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'24:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'25:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'26:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'27:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'28:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'29:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'30:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'33:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaEsquerda',
		]
	},
	'34:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'35:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'36:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'37:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'38:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'39:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'40:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'41:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'42:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'43:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'44:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'45:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'46:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'47:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'48:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'49:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'50:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'51:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'52:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'53:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'54:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'55:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'56:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'57:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'58:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'59:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'60:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'61:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'62:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'63:33:0': {
		items: [
			'tiles:WallBorder.tetoCavernaEsquerda2',
		]
	},
	'34:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'35:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'36:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'37:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'38:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'39:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'40:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'41:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'42:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'43:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'44:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'45:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'46:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'47:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'48:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'49:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'50:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'51:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'52:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'53:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'54:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'55:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'56:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'57:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'58:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'59:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'60:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'61:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'62:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'63:32:0': {
		items: [
			'tiles:WallBorder.tetoCaverna',
		]
	},
	'34:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'35:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'36:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'37:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'38:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'39:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'40:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'41:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'42:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'43:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'44:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'45:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'46:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'47:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'48:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'49:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'50:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'51:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'52:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'53:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'54:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'55:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'56:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'57:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'58:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'59:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'60:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'61:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'62:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},
	'63:31:0': {
		items: [
			'tiles:WallBorder.tetoCavernaCimaBaixo',
		]
	},

}



for (let x = mapInfo.minX; x < mapInfo.maxX; x++) {
    for (let y = mapInfo.minY; y < mapInfo.maxY; y++) {
        let stack = [
            'tiles:Grass'
        ];
        
        const lakeSqm = lake[`${x}:${y}:0`];
        if (lakeSqm) {
            stack = lakeSqm.items;
        }

        const iceSqm = ice[`${x}:${y}:0`];
        if (iceSqm) {
            stack = iceSqm.items;
        }

        const lavaSqm = lava[`${x}:${y}:0`];
        if (lavaSqm) {
            stack = lavaSqm.items;
        }
        
        const sandSqm = sand[`${x}:${y}:0`];
        if (sandSqm) {
            stack = sandSqm.items;
        }

		const beachsandSqm = beach_sand[`${x}:${y}:0`];
        if (beachsandSqm) {
            stack = beachsandSqm.items;
        }


		const wallsSqm = walls[`${x}:${y}:0`];
        if (wallsSqm) {
            stack = wallsSqm.items;
        }

        const item = tileItems[`${x}:${y}:0`];
        if (item) {
            stack = [].concat(stack, [...item.items]);
        }

        finalMap[`${x}:${y}:0`] = stack;
    }
}

const stringMap = JSON.stringify(finalMap);

export default stringMap;