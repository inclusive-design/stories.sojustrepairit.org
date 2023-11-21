// A simple component that is designed to display content using a named template, or nothing if there is no content.
//
// This is meant to be used mainly as a subcomponent in a more complex panel of controls.  It is not responsible for
// request handling or anything other than updating the display when its model changes.
//
// Any changes to the `model` will result in a full refresh.  You are expected to handle everything else in your
// template, including whether to display anything at all.
//
(function (fluid) {
    "use strict";

    fluid.registerNamespace("fluid.handlebars.templateMessage");
    fluid.defaults("fluid.handlebars.templateMessage", {
        gradeNames:  ["fluid.handlebars.templateAware"],
        templateKey: "common-message",
        manipulator: "html", // By default, we replace the contents of our container, but not the container itself.
        selectors: {
            viewport: "" // By default, we operate on the entire container.
        },
        model: {
        },
        modelListeners: {
            "": {
                func:          "{that}.renderInitialMarkup",
                excludeSource: "init"
            }
        },
        invokers: {
            renderInitialMarkup: {
                func: "{that}.renderMarkup",
                args: ["viewport", "{that}.options.templateKey", "{that}.model", "{that}.options.manipulator"]
            }
        }
    });
})(fluid);
