// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
			    // TODO: This application has been newly launched. Initialize your application here.
			    var inProjectOutputElems = WinJS.Utilities.query("#inProjectOuput");
			    if(inProjectOutputElems.length > 0)
			        inProjectOutputElems[0].innerHTML = MetroNode.js.api.sampleMethod();
                
			    inProjectOutputElems = WinJS.Utilities.query("#sharedOutput");
			    if (inProjectOutputElems.length > 0)
			        inProjectOutputElems[0].innerHTML = MetroNode["shared-api"].sharedMethod();

			    inProjectOutputElems = WinJS.Utilities.query("#spacedExample");
			    if (inProjectOutputElems.length > 0)
			        inProjectOutputElems[0].innerHTML = MetroNode["Folder with Spaces"]["module with spaces"].sampleMethod();
			} else {
				// TODO: This application has been reactivated from suspension.
				// Restore application state here.
			}
			args.setPromise(WinJS.UI.processAll());
		}
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.start();
})();
