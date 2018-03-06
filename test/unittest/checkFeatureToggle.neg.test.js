"use strict";

const chai = require('chai');
const expect = chai.expect;
const mockery = require('mockery');

before(() => {
    console.log('=== before on test.negative');

    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
    });

});

after(() => {
    mockery.disable();
    mockery.deregisterAll();
});


describe("Boolean Negative check", function () {
    const servicemock = require("../mock/servicemock");

    it("should run checkBooleanFeatureToggle with ld-unavailable error", function (done) {

        mockery.resetCache();
        mockery.registerMock('ldclient-node', servicemock.mockLaunchDarklyNegativeOnce);
        const ezeFeatureToggle = require('../../index')
        ezeFeatureToggle.checkBooleanFeatureToggle(servicemock.mockRequest(true).User, 'workflowstatus-get-by-firmid')
            .then(result => {
                expect(result).to.equal(false);
            })
            .catch(err => {
                console.log(`err: ${err}`)
            });

        done();
    })
});

describe("Boolean Negative check", function () {
    const servicemock = require("../mock/servicemock");

    it("should run checkBooleanFeatureToggle with error return", function (done) {

        mockery.resetCache();
        mockery.registerMock('ldclient-node', servicemock.mockLaunchDarklyNegativeVariation);
        const ezeFeatureToggle = require('../../index')
        ezeFeatureToggle.checkBooleanFeatureToggle(servicemock.mockRequest(true).User, 'workflowstatus-get-by-firmid')
            .then(result => {
                expect(result).to.equal(false);
            })
            .catch(err => {
                console.log(`err: ${err}`)
            });

        done();
    })
});

describe("Boolean Negative check", function () {
    const servicemock = require("../mock/servicemock");

    it("should run checkBooleanFeatureToggle with unauthenticated user", function (done) {

        mockery.resetCache();
        mockery.registerMock('ldclient-node', servicemock.mockLaunchDarklyNegativeVariation);
        const ezeFeatureToggle = require('../../index')
        ezeFeatureToggle.checkBooleanFeatureToggle(servicemock.mockRequest(false).User, 'workflowstatus-get-by-firmid')
            .then(result => {
                expect(result).to.equal(false);
            })
            .catch(err => {
                console.log(`err: ${err}`)
            });

        done();
    })
});

describe("Multi-value check under unauthenticated case", function () {
    const servicemock = require("../mock/servicemock");

    it("should run checkMultivalueFeatureToggle with unauthenticated user", function (done) {

        mockery.resetCache();
        mockery.registerMock('ldclient-node', servicemock.mockLaunchDarklyNegativeOnce);
        const ezeFeatureToggle = require('../../index')
        ezeFeatureToggle.checkMultivalueFeatureToggle(servicemock.mockRequest(false).User, 'workflowstatus-option',
                'param6')
            .then(result => {
                expect(result).to.equal(undefined);
            })
            .catch(err => {
                console.log(`err: ${err}`)
            });

        done();
    })
});

describe("Multi-value check under unauthenticated case", function () {
    const servicemock = require("../mock/servicemock");

    it("should run checkMultivalueFeatureToggle with error return", function (done) {

        mockery.resetCache();
        mockery.registerMock('ldclient-node', servicemock.mockLaunchDarklyNegativeVariation);
        const ezeFeatureToggle = require('../../index')
        ezeFeatureToggle.checkMultivalueFeatureToggle(servicemock.mockRequest(true).User, 'workflowstatus-option',
                'param6')
            .then(result => {
                expect(result).to.equal(undefined);
            })
            .catch(err => {
                console.log(`err: ${err}`)
            });

        done();
    })
});

describe("Multi-value check under unauthenticated case", function () {
    const servicemock = require("../mock/servicemock");

    it("should run checkMultivalueFeatureToggle with ld-unavailable", function (done) {

        mockery.resetCache();
        mockery.registerMock('ldclient-node', servicemock.mockLaunchDarklyNegativeOnce);
        const ezeFeatureToggle = require('../../index')
        ezeFeatureToggle.checkMultivalueFeatureToggle(servicemock.mockRequest(true).User, 'workflowstatus-option',
                'param6')
            .then(result => {
                expect(result).to.equal(undefined);
            })
            .catch(err => {
                console.log(`err: ${err}`)
            });

        done();
    })
});