'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_oo_curry = require("../../lib/js/caml_oo_curry.js");
var CamlinternalOO = require("../../lib/js/camlinternalOO.js");
var Stdlib__no_aliases = require("../../lib/js/stdlib__no_aliases.js");

var shared = [
  "fold",
  "empty",
  "*dummy method*"
];

var shared$1 = [
  "fold",
  "empty"
];

var shared$2 = ["x"];

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
  
}

function printable_point_init($$class) {
  var x_init = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, [
        "print",
        "move",
        "get_x",
        "*dummy method*"
      ], shared$2);
  var print = ids[0];
  var move = ids[1];
  var get_x = ids[2];
  var x = ids[4];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$neg1) {
            return self$neg1[x];
          }),
        move,
        (function (self$neg1, d) {
            self$neg1[x] = self$neg1[x] + d | 0;
            
          }),
        print,
        (function (self$neg1) {
            return String(Curry._1(self$neg1[0][get_x], self$neg1));
          })
      ]);
  return function (env, self, x_init$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x_init] = x_init$1;
    self$1[x] = x_init$1;
    return self$1;
  };
}

var printable_point = CamlinternalOO.make_class([
      "move",
      "print",
      "get_x"
    ], printable_point_init);

function printable_colored_point_init($$class) {
  var y = CamlinternalOO.new_variable($$class, "");
  var c = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, [
        "print",
        "move",
        "get_x",
        "color",
        "*dummy method*"
      ], ["c"]);
  var print = ids[0];
  var color = ids[3];
  var c$1 = ids[5];
  CamlinternalOO.set_method($$class, color, (function (self$neg2) {
          return self$neg2[c$1];
        }));
  var inh = CamlinternalOO.inherits($$class, shared$2, 0, [
        "get_x",
        "move",
        "print"
      ], printable_point, true);
  var obj_init = inh[0];
  var print$1 = inh[4];
  CamlinternalOO.set_method($$class, print, (function (self$neg2) {
          return "(" + (Curry._1(print$1, self$neg2) + (", " + (Curry._1(self$neg2[0][color], self$neg2) + ")")));
        }));
  return function (env, self, y$1, c$2) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[c] = c$2;
    self$1[y] = y$1;
    self$1[c$1] = c$2;
    Curry._2(obj_init, self$1, y$1);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

var printable_colored_point = CamlinternalOO.make_class([
      "move",
      "print",
      "color",
      "get_x"
    ], printable_colored_point_init);

var p = Curry._3(printable_colored_point[0], undefined, 17, "red");

eq("File \"class5_test.ml\", line 32, characters 12-19", Caml_oo_curry.js1(-930392019, 1, p), "(17, red)");

function ref_init($$class) {
  var x_init = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, [
        "set",
        "get",
        "*dummy method*"
      ], shared$2);
  var set = ids[0];
  var get = ids[1];
  var x = ids[3];
  CamlinternalOO.set_methods($$class, [
        get,
        (function (self$neg3) {
            return self$neg3[x];
          }),
        set,
        (function (self$neg3, y) {
            self$neg3[x] = y;
            
          })
      ]);
  return function (env, self, x_init$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x_init] = x_init$1;
    self$1[x] = x_init$1;
    return self$1;
  };
}

var ref = CamlinternalOO.make_class([
      "get",
      "set"
    ], ref_init);

var r = Curry._2(ref[0], undefined, 1);

Caml_oo_curry.js2(5741474, 2, r, 2);

var v = Caml_oo_curry.js1(5144726, 3, r);

eq("File \"class5_test.ml\", line 43, characters 12-19", v, 2);

function intlist_init($$class) {
  var l = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.get_method_labels($$class, shared);
  var fold = ids[0];
  var empty = ids[1];
  CamlinternalOO.set_methods($$class, [
        empty,
        (function (self$neg4) {
            return Caml_obj.caml_equal(self$neg4[l], /* [] */0);
          }),
        fold,
        (function (self$neg4, f, accu) {
            return List.fold_left(f, accu, self$neg4[l]);
          })
      ]);
  return function (env, self, l$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[l] = l$1;
    return self$1;
  };
}

var intlist = CamlinternalOO.make_class(shared$1, intlist_init);

var l = Curry._2(intlist[0], undefined, {
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

eq("File \"class5_test.ml\", line 54, characters 5-12", 6, Caml_oo_curry.js3(-1010803711, 4, l, (function (x, y) {
            return x + y | 0;
          }), 0));

function intlist2_init($$class) {
  var l = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.get_method_labels($$class, shared);
  var fold = ids[0];
  var empty = ids[1];
  CamlinternalOO.set_methods($$class, [
        empty,
        (function (self$neg5) {
            return Caml_obj.caml_equal(self$neg5[l], /* [] */0);
          }),
        fold,
        (function (self$neg5, f, accu) {
            return List.fold_left(f, accu, self$neg5[l]);
          })
      ]);
  return function (env, self, l$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[l] = l$1;
    return self$1;
  };
}

var intlist2 = CamlinternalOO.make_class(shared$1, intlist2_init);

var l$1 = Curry._2(intlist2[0], undefined, {
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

eq("File \"class5_test.ml\", line 67, characters 5-12", [
      6,
      "1 2 3 "
    ], [
      Caml_oo_curry.js3(-1010803711, 5, l$1, (function (x, y) {
              return x + y | 0;
            }), 0),
      Caml_oo_curry.js3(-1010803711, 6, l$1, (function (s, x) {
              return s + (String(x) + " ");
            }), "")
    ]);

function point_init($$class) {
  var x_init = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, [
        "move",
        "get_x",
        "*dummy method*"
      ], shared$2);
  var move = ids[0];
  var get_x = ids[1];
  var x = ids[3];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$neg6) {
            return self$neg6[x];
          }),
        move,
        (function (self$neg6, d) {
            self$neg6[x] = self$neg6[x] + d | 0;
            
          })
      ]);
  return function (env, self, x_init$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x_init] = x_init$1;
    self$1[x] = x_init$1;
    return self$1;
  };
}

var point = CamlinternalOO.make_class([
      "move",
      "get_x"
    ], point_init);

function distance_point_init($$class) {
  var x = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.get_method_labels($$class, [
        "move",
        "get_x",
        "distance",
        "*dummy method*"
      ]);
  var distance = ids[2];
  var inh = CamlinternalOO.inherits($$class, shared$2, 0, [
        "get_x",
        "move"
      ], point, true);
  var obj_init = inh[0];
  var x$1 = inh[1];
  CamlinternalOO.set_method($$class, distance, (function (self$neg7, other) {
          return Stdlib__no_aliases.abs(Caml_oo_curry.js1(291546447, 7, other) - self$neg7[x$1] | 0);
        }));
  return function (env, self, x$2) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = x$2;
    Curry._2(obj_init, self$1, x$2);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

var distance_point = CamlinternalOO.make_class([
      "move",
      "distance",
      "get_x"
    ], distance_point_init);

var p$1 = Curry._2(distance_point[0], undefined, 3);

var a = Caml_oo_curry.js2(-335965387, 8, p$1, Curry._2(point[0], undefined, 8));

var b = Caml_oo_curry.js2(-335965387, 9, p$1, Curry._3(printable_colored_point[0], undefined, 1, "blue"));

eq("File \"class5_test.ml\", line 94, characters 5-12", [
      5,
      2
    ], [
      a,
      b
    ]);

Mt.from_pair_suites("Class5_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.printable_point = printable_point;
exports.printable_colored_point = printable_colored_point;
exports.p = p;
exports.ref = ref;
exports.v = v;
exports.intlist = intlist;
exports.intlist2 = intlist2;
exports.l = l$1;
exports.point = point;
exports.distance_point = distance_point;
exports.a = a;
exports.b = b;
/* printable_point Not a pure module */
