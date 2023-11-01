const fs = require('fs')

const addCitiesToJSON = (cities, filename) => {
	// read the existing JSON file
	let data = []
	try {
		const jsonContent = fs.readFileSync(filename, 'utf-8')
		data = JSON.parse(jsonContent)
	} catch (error) {
		console.log('file does not exist or is empty')
	}

	// add the new names to the data
	cities.forEach((city) => {
		data.push({ city })
	})

	// write the updated data back to the JSON file
	fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8')
}

const jsonFileName = '../data/coloradoCities.json'

// run the function to add cities list
addCitiesToJSON(citiesToAdd, jsonFileName)


const citiesToAdd = [
"Acres Green",
"Aetna Estates",
"Aguilar",
"Air Force Academy",
"Akron",
"Alamosa",
"Allenspark",
"Alma",
"Alpine",
"Altona",
"Amherst",
"Antonito",
"Applewood",
"Arapahoe",
"Arboles",
"Aristocrat Ranchettes",
"Arriba",
"Arvada",
"Aspen",
"Aspen Park",
"Atwood",
"Ault",
"Aurora",
"Avon",
"Avondale",
"Bark Ranch",
"Basalt",
"Battlement Mesa",
"Bayfield",
"Bennett",
"Berkley",
"Berthoud",
"Bethune",
"Beulah Valley",
"Black Forest",
"Black Hawk",
"Blanca",
"Blende",
"Blue River",
"Blue Sky",
"Blue Valley",
"Bonanza",
"Bonanza Mountain Estates",
"Boone",
"Boulder",
"Bow Mar",
"Brandon",
"Branson",
"Breckenridge",
"Brick Center",
"Briggsdale",
"Brighton",
"Brook Forest",
"Brookside",
"Broomfield",
"Brush",
"Buena Vista",
"Burlington",
"Byers",
"Calhan",
"Campo",
"Cañon City",
"Capulin",
"Carbonate",
"Carbondale",
"Cascade-Chipita Park",
"Castle Pines",
"Castle Pines Village",
"Castle Rock",
"Cathedral",
"Catherine",
"Cattle Creek",
"Cedaredge",
"Centennial",
"Center",
"Central City",
"Chacra",
"Cheraw",
"Cherry Creek",
"Cherry Hills Village",
"Cheyenne Wells",
"Cimarron Hills",
"Creede",
"Clifton",
"Coal Creek",
"Coaldale",
"Cokedale",
"Collbran",
"Colona",
"Colorado City",
"Colorado Springs",
"Columbine",
"Columbine Valley",
"Comanche Creek",
"Commerce City",
"Conejos",
"Cope",
"Copper Mountain",
"Cortez",
"Cotopaxi",
"Craig",
"Crawford",
"Crested Butte",
"Crestone",
"Cripple Creek",
"Crisman",
"Crook",
"Crowley",
"Dacono",
"Dakota Ridge",
"De Beque",
"Deer Trail",
"Del Norte",
"Delta",
"Denver",
"Derby",
"Dillon",
"Dinosaur",
"Divide",
"Dolores",
"Dotsero",
"Dove Creek",
"Dove Valley",
"Downieville-Lawson-Dumont",
"Durango",
"Eads",
"Eagle",
"East Pleasant View",
"Eaton",
"Echo Hills",
"Eckley",
"Edgewater",
"Edwards",
"El Jebel",
"El Moro",
"Elbert",
"Eldora",
"Eldorado Springs",
"Elizabeth",
"Ellicott",
"Empire",
"Englewood",
"Erie",
"Estes Park",
"Evans",
"Evergreen",
"Fairmount",
Fairplay
Federal Heights
Firestone
Flagler
Fleming
Florence
Florissant
Floyd Hill
Fort Carson
Fort Collins
Fort Garland
Fort Lupton
Fort Morgan
Fountain
Four Square Mile
Fowler
Foxfield
Franktown
Fraser
Frederick
Frisco
Fruita
Fruitvale
Fulford
Garden City
Gardner
Garfield
Genesee
Genoa
Georgetown
Gerrard
Gilcrest
Glendale
Glendale
Gleneagle
Glenwood Springs
Gold Hill
Golden
Goldfield
Granada
Granby
Grand Junction
Grand Lake
Grand View Estates
Greeley
Green Mountain Falls
Greenwood Village
Grover
Guffey
Gunbarrel
Gunnison
Gypsum
Hartman
Hartsel
Hasty
Haswell
Haxtun
Hayden
Heeney
Hidden Lake
Highlands Ranch
Hillrose
Hoehne
Holly
Holly Hills
Holyoke
Hooper
Hot Sulphur Springs
Hotchkiss
Howard
Hudson
Hugo
Idaho Springs
Idalia
Idledale
Ignacio
Iliff
Indian Hills
Inverness
Jackson Lake
Jamestown
Jansen
Joes
Johnson Village
Johnstown
Julesburg
Keenesburg
Ken Caryl
Kersey
Keystone
Kim
Kiowa
Kirk
Kit Carson
Kittredge
Kremmling
La Jara
La Junta
La Salle
La Veta
Lafayette
Laird
Lake City
Lakeside
Lakewood
Lamar
Laporte
Larkspur
Las Animas
Lazear
Lazy Acres
Leadville
Leadville North
Lewis
Leyner
Limon
Lincoln Park
Littleton
Lochbuie
Log Lane Village
Loghill Village
Loma
Lone Tree
Longmont
Louisville
Louviers
Loveland
Lynn
Lyons
Manassa
Mancos
Manitou Springs
Manzanola
Marble
Marvel
Matheson
Maybell
Maysville
McClave
McCoy
Mead
Meeker
Meridian
Meridian Village
Merino
Midland
Milliken
Minturn
Moffat
Monte Vista
Montezuma
Montrose
Monument
Morgan Heights
Morrison
Mount Crested Butte
Mountain Meadows
Mountain View
Mountain Village
Mulford
Nathrop
Naturita
Nederland
New Castle
Niwot
No Name
Norrie
North La Junta
North Washington
Northglenn
Norwood
Nucla
Nunn
Oak Creek
Olathe
Olney Springs
Ophir
Orchard
Orchard City
Orchard Mesa
Ordway
Otis
Ouray
Ovid
Padroni
Pagosa Springs
Palisade
Palmer Lake
Paoli
Paonia
Parachute
Park Center
Parker
Parshall
Peetz
Penrose
Peoria
Perry Park
Peyton
Phippsburg
Pierce
Pine Brook Hill
Pine Valley
Pitkin
Placerville
Platteville
Poncha Springs
Ponderosa Park
Portland	Ouray County	1	111
Pritchett	Baca County	1	81
Pueblo	Pueblo County	7	111,424
Pueblo West	Pueblo County	2	32,991
Ramah	El Paso County	1	114
Rangely	Rio Blanco County	1	2,381
Raymer (New Raymer)	Weld County	1	95
Red Cliff	Eagle County	1	281
Red Feather Lakes	Larimer County	1	562
Redlands	Mesa County	3	9,092
Redstone	Pitkin County	1	167
Redvale	Montrose County	1	315
Rico	Dolores County	1	335
Ridgway	Ouray County	1	1,033
Rifle	Garfield County	1	10,325
Rock Creek Park	El Paso County	1	103
Rockvale	Fremont County	1	632
Rocky Ford	Otero County	1	3,876
Rollinsville	Gilpin County	1	197
Romeo	Conejos County	1	313
Roxborough Park	Douglas County	1	8,861
Rye	Pueblo County	1	189
Saddle Ridge	Morgan County	1	111
Saguache	Saguache County	1	530
Salida	Chaffee County	1	5,671
Salt Creek	Pueblo County	1	771
San Acacio	Costilla County	1	63
San Luis	Costilla County	1	624
Sanford	Conejos County	1	1,359
Sawpit	San Miguel County	1	17
Security-Widefield	El Paso County	4	40,158
Sedalia	Douglas County	1	58
Sedgwick	Sedgwick County	1	166
Segundo	Las Animas County	2	138
Seibert	Kit Carson County	1	133
Seven Hills	Boulder County	1	137
Severance	Weld County	1	7,691
Shaw Heights	Adams County	1	5,648
Sheridan	Arapahoe County	2	6,090
Sheridan Lake
Sherrelwood
"Sierra Ridge",
"Silt",
"Silver Cliff",
"Silver Plume",
"Silverthorne",
"Silverton",
"Simla",
"Smeltertown",
"Snowmass Village",
"Snyder",
"Somerset",
"South Fork",
"Southern Ute",
"Springfield",
"St. Ann Highlands",
"St. Mary's",
"Starkville",
"Steamboat Springs",
"Stepping Stone",
"Sterling",
"Sterling Ranch",
"Stonegate",
"Stonewall Gap",
"Strasburg",
"Stratmoor",
"Stratton",
"Sugar City",
"Sugarloaf",
"Sunshine",
"Superior",
"Swink",
"Tabernash",
"Tall Timber",
"Telluride",
"The Pinery",
"Thornton",
"Timnath",
"Todd Creek",
"Towaoc",
"Towner",
"Trail Side",
"Trinidad",
"Twin Lakes",
"Twin Lakes",
"Two Buttes",
"Upper Bear Creek",
"Upper Witter Gulch",
"Vail",
"Valdez",
"Valmont",
"Vernon",
"Victor",
"Vilas",
"Vineland",
"Vona",
"Walden",
"Walsenburg",
"Walsh",
"Ward",
"Watkins",
"Welby",
"Weldona",
"Wellington",
"West Pleasant View",
"Westcliffe",
"Westcreek",
"Westminster",
"Weston",
"Wheat Ridge",
"Wiggins",
"Wiley",
"Williamsburg",
"Windsor",
"Winter Park",
"Wolcott",
"Woodland Park",
"Woodmoor",
"Woody Creek",
"Wray",
"Yampa",
"Yuma"
]