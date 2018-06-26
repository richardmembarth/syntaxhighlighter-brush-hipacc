var BrushBase = require('brush-cpp');

const datatypes = 'uchar4 ushort4 uint4 char4 short4 int4 float4 double4';

const keywords = 'Image Pyramid Accessor Kernel IterationSpace Mask Domain ' +
                 'BoundaryCondition output output_at pixel_at convolve reduce iterate traverse ' +
                 'Boundary::MIRROR Boundary::UNDEFINED Boundary::REPEAT Boundary::CONSTANT ' +
                 'Interpolate::NO Interpolate::NN Interpolate::LF Interpolate::CF Interpolate::L3 ' +
                 'Reduce::SUM Reduce::MIN Reduce::MAX Reduce::PROD Reduce::MEDIAN';

const functions = 'convert_uchar4 convert_ushort4 convert_uint4 convert_char4 ' +
                  'convert_short4 convert_int4 convert_float4 convert_double4';

class Brush extends BrushBase {
  constructor() {
    super();

    this.regexList = (new BrushBase()).regexList;
    this.regexList.push(
        { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions bold' },
        { regex: new RegExp(this.getKeywords(datatypes), 'gm'), css: 'color1 bold' },
        { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'color2 bold' }
    );
  }
}

Brush.prototype = new BrushBase();
Brush.aliases = ['hipacc'];
module.exports = Brush;
