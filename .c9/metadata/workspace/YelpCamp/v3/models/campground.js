{"filter":false,"title":"campground.js","tooltip":"/YelpCamp/v3/models/campground.js","undoManager":{"mark":50,"position":50,"stack":[[{"start":{"row":0,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["var campgroundSchema = new mongoose.Schema({","    name: String,","    image: String,","    description: String","});","","var Campground = mongoose.model(\"Campground\", campgroundSchema) //compiles campgroundSchema into a model. use \"Campground\" as mongoose pluralises it to \"Campgrounds\". allows us to use mongo fns on Campground",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["l"],"id":3},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["e"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":4}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":[" "],"id":5},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":["t"]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["e"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["l"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["c"],"id":6},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["o"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["n"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["s"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["m"],"id":8},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["o"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["n"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["g"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["o"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["o"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["s"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":14},"action":"remove","lines":["mongoose"],"id":9},{"start":{"row":0,"column":6},"end":{"row":0,"column":14},"action":"insert","lines":["mongoose"]}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "],"id":10},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":[" "],"id":11},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["r"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["e"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["w"]}],[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"remove","lines":["w"],"id":12}],[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["q"],"id":13}],[{"start":{"row":0,"column":17},"end":{"row":0,"column":20},"action":"remove","lines":["req"],"id":14},{"start":{"row":0,"column":17},"end":{"row":0,"column":28},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["m"],"id":15},{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["o"]},{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["n"]},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["g"]},{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["o"]},{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["o"]},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["s"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":[";"],"id":16}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["t"],"id":17},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["s"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":["n"]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["o"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["c"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"],"id":18},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":14},"action":"remove","lines":["var Campground"],"id":19},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["m"]},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["o"]},{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["d"]},{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["u"]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["l"]},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["e"]},{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["."]}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["e"],"id":20},{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["x"]}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":9},"action":"remove","lines":["ex"],"id":21},{"start":{"row":8,"column":7},"end":{"row":8,"column":14},"action":"insert","lines":["exports"]}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":[","],"id":22}],[{"start":{"row":5,"column":24},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["c"],"id":24},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["o"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["m"]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["m"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["e"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["n"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["t"]},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":[":"],"id":25}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":16},"action":"insert","lines":["[]"],"id":27}],[{"start":{"row":6,"column":15},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":28},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":7,"column":8},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":29},{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"remove","lines":["    "],"id":30}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"insert","lines":["    "],"id":31}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["{"],"id":32}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["}"],"id":33}],[{"start":{"row":7,"column":9},"end":{"row":9,"column":8},"action":"insert","lines":["","            ","        "],"id":34}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["t"],"id":35},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["y"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["p"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":[":"],"id":36}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":[" "],"id":37}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["m"],"id":38},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["o"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["n"]}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":21},"action":"remove","lines":["mon"],"id":39},{"start":{"row":8,"column":18},"end":{"row":8,"column":33},"action":"insert","lines":["mongoose.Schema"]}],[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["."],"id":40},{"start":{"row":8,"column":34},"end":{"row":8,"column":35},"action":"insert","lines":["T"]},{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"remove","lines":["t"],"id":41}],[{"start":{"row":8,"column":35},"end":{"row":8,"column":36},"action":"insert","lines":["y"],"id":42},{"start":{"row":8,"column":36},"end":{"row":8,"column":37},"action":"insert","lines":["p"]},{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":38},"end":{"row":8,"column":39},"action":"insert","lines":["."],"id":43},{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":["O"]},{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"insert","lines":["b"]},{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":["j"]},{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["e"]},{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["c"]}],[{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["t"],"id":44},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["I"]},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["d"]}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":[","],"id":45}],[{"start":{"row":8,"column":48},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":9,"column":0},"end":{"row":9,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["r"],"id":47},{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["e"]},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["f"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":[":"]}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":[" "],"id":48}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":19},"action":"insert","lines":["\"\""],"id":49}],[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["C"],"id":50},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["o"]},{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["m"]},{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["m"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["e"]},{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["n"]},{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":38},"end":{"row":8,"column":39},"action":"insert","lines":["s"],"id":51}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":39},"end":{"row":8,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1530276615264,"hash":"19613f15442845c97aeec354be8e496dcd3dbde8"}