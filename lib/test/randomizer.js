"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockRandomizer = mockRandomizer;
exports.mockedRandomizer = mockedRandomizer;
var sinon_1 = require("sinon");
var internal_1 = require("../internal");
function mockRandomizer(base) {
    var $random = (0, sinon_1.stub)();
    Object.assign(base.randomizer, { $random: $random });
    return $random;
}
function mockedRandomizer(rands) {
    var randomizer = internal_1.BCDice.Randomizer.$new();
    var $random = mockRandomizer({ randomizer: randomizer });
    if (rands) {
        rands.forEach(function (rand, index) {
            $random.onCall(index).returns(rand[0]);
        });
    }
    return [randomizer, $random];
}
//# sourceMappingURL=randomizer.js.map