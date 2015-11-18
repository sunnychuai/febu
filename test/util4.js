var path = require('path');
var expect = require('expect.js');
var proxyquire = require('proxyquire');
var util = proxyquire('../module/util.js', {
    './common.js': {
        getCwd: function() {
            return path.join(__dirname, '/testcase/project1');
        }
    }
});

describe(__filename, function(){
    var project = {};
    it('getProjectConfig', function() {
        var devPublicPath = util.getProjectConfig(project, 'development.publicPath');
        expect(devPublicPath).to.be("//static.f2e.example.com/assets/myproject");        
    });

    it('getProjectConfig2', function() {
        var ignore = util.getProjectConfig(project, 'ignore');
        expect(ignore).to.eql(['node_modules/']);
    });
});