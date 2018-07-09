webpackJsonp([ 0, 1 ], [ function(e, t) {
    e.exports = _;
}, function(e, t) {
    e.exports = angular;
}, function(e, t) {
    e.exports = $;
}, function(e, t) {}, function(e, t) {
    e.exports = '<a href="" class="catalog-search-match" ng-if="match.model.id !== \'viewAll\' && match.model.id !== \'viewNone\'" ng-class="{\'catalog-search-summary\': match.model.id === \'viewNone\' || match.model.id === \'viewAll\'}">\n  <span class="catalog-search-match-icon" ng-if="match.model.id !== \'viewAll\' && match.model.id !== \'viewNone\'">\n    <span ng-if="match.model.imageUrl"><img ng-src="{{match.model.imageUrl}}"></span>\n    <span ng-if="!match.model.imageUrl && match.model.iconClass" ng-class="match.model.iconClass" class="icon"></span>\n  </span>\n  <div class="catalog-search-match-info" ng-if="match.model.id !== \'viewAll\' && match.model.id !== \'viewNone\'">\n    <div class="catalog-search-match-label">\n      {{match.label}}\n    </div>\n    <div class="catalog-search-match-description">\n      <span ng-repeat="tag in (match.model.tags || match.model.resource.tags)" class="tag small text-muted">\n        {{tag}}\n      </span>\n    </div>\n  </div>\n</a>\n<a ng-if="match.model.id === \'viewAll\'" href="" class="catalog-search-show-all">{{match.model.text}}  <span class="fa fa-angle-right" aria-hidden="true"></span></a>\n<div ng-if="match.model.id === \'viewNone\'" class="catalog-search-show-none">{{match.model.text}}</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <bind-application-form application-name="$ctrl.name"\n                         form-name="$ctrl.bindForm"\n                         allow-no-binding="true"\n                         service-instances="$ctrl.serviceInstances"\n                         service-classes="$ctrl.serviceClasses"\n                         service-to-bind="$ctrl.serviceToBind">\n  </bind-application-form>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.builderForm" class="config-form">\n      <select-project ng-if="!$ctrl.addToProject" selected-project="$ctrl.selectedProject"\n                      name-taken="$ctrl.projectNameTaken"></select-project>\n      <span ng-if="!$ctrl.noProjectsCantCreate">\n        <div class="form-group">\n          <label class="control-label" for="version">Version</label>\n          <ui-select ng-model="$ctrl.istag" required search-enabled="false">\n            <ui-select-match>\n              <span>\n                {{$select.selected.name}}\n                <small ng-repeat="otherTag in $ctrl.referencedBy[$select.selected.name]">\n                  <span ng-if="$first"> &mdash; </span>{{otherTag}}<span ng-if="!$last">,</span>\n                </small>\n              </span>\n            </ui-select-match>\n            <ui-select-choices repeat="tag in $ctrl.versions track by tag.name">\n              {{tag.name}}\n              <small ng-repeat="otherTag in $ctrl.referencedBy[tag.name]">\n                <span ng-if="$first"> &mdash; </span>{{otherTag}}<span ng-if="!$last">,</span>\n              </small>\n            </ui-select-choices>\n          </ui-select>\n        </div>\n        <div class="form-group">\n          <label class="control-label required" for="app-name">Application Name</label>\n          <div ng-class="{ \'has-error\': $ctrl.builderForm.name.$dirty && $ctrl.builderForm.name.$touched && $ctrl.builderForm.name.$invalid }">\n            <input\n              class="form-control"\n              type="text"\n              id="app-name"\n              required\n              minlength="2"\n              ng-maxlength="$ctrl.nameMaxLength"\n              ng-pattern="$ctrl.namePattern"\n              ng-model="$ctrl.name"\n              name="name"\n              autocorrect="off"\n              autocapitalize="none"\n              spellcheck="false">\n            \x3c!--\n              Wait until users leave the field to avoid flashing errors as they\n              type. Check $dirty touched to avoid a usability problem where the\n              "Try Sample Repository" link moves from under the mouse cursor\n              when clicked since the error message appears.\n            --\x3e\n            <div ng-if="$ctrl.builderForm.name.$dirty && $ctrl.builderForm.name.$touched">\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.required">\n                <span class="help-block">\n                  Application name is required.\n                </span>\n              </div>\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.pattern">\n                <span class="help-block">\n                  Application name consists of lower-case letters, numbers, and dashes. It must start with a letter and can\'t end with a <code>-</code>.\n                </span>\n              </div>\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.minlength">\n                <span class="help-block">\n                  Application name must be at least 2 characters.\n                </span>\n              </div>\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.maxlength">\n                <span class="help-block">\n                  Application name can\'t be more than 24 characters.\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label class="control-label required" for="repository">Git Repository</label>\n          <div ng-class="{ \'has-error\': $ctrl.builderForm.repository.$touched && $ctrl.builderForm.repository.$error.$required }">\n            <input class="form-control"\n              type="text"\n              id="repository"\n              name="repository"\n              required\n              ng-model="$ctrl.repository"\n              ng-change="$ctrl.onRepositoryChanged()"\n              autocorrect="off"\n              autocapitalize="off"\n              spellcheck="false">\n            <div ng-if="$ctrl.istag.annotations.sampleRepo" class="help-block">\n              <a href="" ng-click="$ctrl.fillSampleRepo()">Try Sample Repository\n                <i class="fa fa-level-up" aria-hidden="true"></i></a>\n            </div>\n            <div class="has-error" ng-if="$ctrl.builderForm.repository.$touched && $ctrl.builderForm.repository.$error.$required">\n              <span class="help-block">\n                Git repository is required.\n              </span>\n            </div>\n            <div class="has-warning" ng-if="$ctrl.builderForm.repository.$touched && $ctrl.repository && !$ctrl.repositoryPattern.test($ctrl.repository)">\n              <span class="help-block">\n                This might not be a valid Git URL. Check that it is the correct URL to a remote Git repository.\n              </span>\n            </div>\n          </div>\n        </div>\n\n        \x3c!--\n          Only show the link for existing projects. It will be broken for new\n          projects.  Use class `invisible` when the project list is still loading\n          so the dialog doesn\'t resize.\n        --\x3e\n        <div ng-hide="$ctrl.selectedProject && !$ctrl.selectedProject.metadata.uid"\n             ng-class="{ invisible: !$ctrl.selectedProject || !$ctrl.istag }"\n             class="form-group">\n          If you have a private Git repository or need to change application defaults, view\n          <a href="" ng-click="$ctrl.navigateToAdvancedForm()">advanced options</a>.\n        </div>\n      </span>\n    </form>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-details">\n  <div class="order-service-details-top" ng-class="{\'order-service-details-top-icon-top\': $ctrl.imageStream.vendor || $ctrl.documentationUrl || $ctrl.supportUrl}">\n    <div class="service-icon">\n      <span ng-if="!$ctrl.imageStream.imageUrl" class="icon {{$ctrl.imageStream.iconClass}}" aria-hidden="true"></span>\n      <span ng-if="$ctrl.imageStream.imageUrl" class="image"><img ng-src="{{$ctrl.imageStream.imageUrl}}" alt=""></span>\n    </div>\n    <div class="service-title-area">\n      <div class="service-title">\n        {{$ctrl.imageStream.name}}\n      </div>\n      <div ng-if="$ctrl.imageStream.vendor" class="service-vendor">\n        {{$ctrl.imageStream.vendor}}\n      </div>\n      <div class="order-service-tags">\n        <span ng-repeat="tag in $ctrl.istag.annotations.tags.split(\',\')" class="tag">\n          {{tag}}\n        </span>\n      </div>\n      <ul ng-if="$ctrl.documentationUrl || $ctrl.supportUrl" class="list-inline order-service-documentation-url">\n        <li ng-if="$ctrl.documentationUrl">\n          <a ng-href="{{$ctrl.documentationUrl}}" target="_blank" class="learn-more-link">View Documentation <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n        <li ng-if="$ctrl.supportUrl">\n          <a ng-href="{{$ctrl.supportUrl}}" target="_blank" class="learn-more-link">Get Support <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="order-service-description-block">\n    <p ng-bind-html="($ctrl.istag.annotations.description | linky : \'_blank\') || \'No description provided.\'" class="description"></p>\n    <p ng-if="$ctrl.istag.annotations.sampleRepo">\n      Sample Repository:\n      \x3c!-- TODO: Use Git link filter, needs to be added to origin-web-common --\x3e\n      <span ng-bind-html="$ctrl.istag.annotations.sampleRepo | linky : \'_blank\'"></span>\n    </p>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div ng-if="!$ctrl.success && !$ctrl.error">\n    <div class="results-status">\n      <span class="fa fa-clock-o text-muted" aria-hidden="true"></span>\n      <span class="sr-only">Pending</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.name}}</strong> is being created in <strong>{{$ctrl.selectedProject | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.success">\n    <div class="results-status">\n      <span class="pficon pficon-ok" aria-hidden="true"></span>\n      <span class="sr-only">Success</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.name}}</strong> has been created in <strong>{{$ctrl.selectedProject | displayName}}</strong> successfully.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.success && $ctrl.binding">\n    <bind-results error="$ctrl.bindError"\n                  binding="$ctrl.binding"\n                  service-to-bind="$ctrl.serviceToBind.metadata.name"\n                  bind-type="application"\n                  application-to-bind="$ctrl.name"\n                  show-pod-presets="$ctrl.showPodPresets">\n    </bind-results>\n  </div>\n  <div ng-if="$ctrl.success">\n    <p ng-if="!$ctrl.serviceToBind || $ctrl.bindComplete">\n      <a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}" ng-click="$ctrl.closePanel()">Continue to the project overview</a> to check the status of your application as it builds and deploys.\n    </p>\n  </div>\n  <div class="results-failure" ng-if="$ctrl.error">\n    <div class="results-status">\n      <span class="pficon pficon-error-circle-o text-danger" aria-hidden="true"></span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.name}}</strong> failed to create in <strong>{{$ctrl.selectedProject | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n    <div class="sub-title">\n      <span ng-if="$ctrl.error.data.message">\n        {{$ctrl.error.data.message | upperFirst}}\n      </span>\n      <span ng-if="!$ctrl.error.data.message">\n        An error occurred creating the application.\n      </span>\n    </div>\n    \x3c!-- TODO: Improve error message presentation --\x3e\n    <ul ng-if="$ctrl.error.failure.length" class="failure-messages">\n      <li ng-repeat="failure in $ctrl.error.failure">\n        {{failure.data.message}}\n      </li>\n    </ul>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.forms.bindParametersForm" class="config-form">\n      <catalog-parameters\n        ng-if="$ctrl.bindParameterSchema.properties"\n        model="$ctrl.bindParameterData"\n        parameter-schema="$ctrl.bindParameterSchema"\n        parameter-form-definition="$ctrl.bindParameterFormDefinition">\n      </catalog-parameters>\n    </form>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <bind-service-form service-class="$ctrl.serviceClass.resource"\n                     show-pod-presets="$ctrl.showPodPresets"\n                     applications="$ctrl.applications"\n                     form-name="$ctrl.forms.bindForm"\n                     allow-no-binding="true"\n                     project-name="$ctrl.projectDisplayName"\n                     bind-type="$ctrl.bindType"\n                     app-to-bind="$ctrl.appToBind">\n  </bind-service-form>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.forms.orderConfigureForm" class="config-form">\n      <select-project ng-if="!$ctrl.addToProject" selected-project="$ctrl.selectedProject" name-taken="$ctrl.projectNameTaken" show-divider="$ctrl.parameterSchema.properties.length > 0"></select-project>\n      <catalog-parameters\n        ng-if="$ctrl.parameterSchema.properties && !$ctrl.noProjectsCantCreate"\n        model="$ctrl.parameterData"\n        parameter-schema="$ctrl.parameterSchema"\n        parameter-form-definition="$ctrl.parameterFormDefinition">\n      </catalog-parameters>\n    </form>\n    <div ng-if="$ctrl.error" class="has-error">\n      <span class="help-block">{{$ctrl.error}}</span>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-details">\n  <div class="order-service-details-top" ng-class="{\'order-service-details-top-icon-top\': $ctrl.serviceClass.vendor || $ctrl.docUrl || $ctrl.supportUrl}">\n    <div class="service-icon">\n      <span ng-if="!$ctrl.imageUrl" class="icon {{$ctrl.iconClass}}" aria-hidden="true"></span>\n      <span ng-if="$ctrl.imageUrl" class="image"><img ng-src="{{$ctrl.imageUrl}}" alt=""></span>\n    </div>\n    <div class="service-title-area">\n      <div class="service-title">\n        {{$ctrl.serviceName}}\n      </div>\n      <div ng-if="$ctrl.serviceClass.vendor" class="service-vendor">\n        {{$ctrl.serviceClass.vendor}}\n      </div>\n      <div ng-if="$ctrl.serviceClass.tags" class="order-service-tags">\n        <span ng-repeat="tag in $ctrl.serviceClass.tags" class="tag">\n          {{tag}}\n        </span>\n      </div>\n      <ul ng-if="$ctrl.docUrl || $ctrl.supportUrl" class="list-inline order-service-documentation-url">\n        <li ng-if="$ctrl.docUrl" >\n          <a ng-href="{{$ctrl.docUrl}}" target="_blank" class="learn-more-link">View Documentation <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n        <li ng-if="$ctrl.supportUrl" >\n          <a ng-href="{{$ctrl.supportUrl}}" target="_blank" class="learn-more-link">Get Support <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="order-service-description-block">\n    <p ng-if="!$ctrl.multipleServicePlans && ($ctrl.selectedPlan.spec.externalMetadata.displayName || $ctrl.selectedPlan.spec.description)">\n      <span ng-if="$ctrl.selectedPlan.spec.externalMetadata.displayName">\n        Plan {{$ctrl.selectedPlan.spec.externalMetadata.displayName}}\n        <span ng-if="$ctrl.selectedPlan.spec.description">&ndash;</span>\n      </span>\n      <span ng-if="$ctrl.selectedPlan.spec.description">{{$ctrl.selectedPlan.spec.description}}</span>\n    </p>\n    <p ng-if="!$ctrl.description && !$ctrl.longDescription" class="description">No description provided.</p>\n    <p ng-if="$ctrl.description" ng-bind-html="($ctrl.description | linky : \'_blank\')" class="description"></p>\n    <p ng-if="$ctrl.longDescription" ng-bind-html="$ctrl.longDescription | linky : \'_blank\'" class="description"></p>\n    <div ng-if="$ctrl.imageDependencies.length">\n      <div class="order-service-subheading">Image Dependencies</div>\n      <div ng-repeat="imageName in $ctrl.imageDependencies" class="order-service-dependent-image">\n        <span class="pficon pficon-image" aria-hidden="true"></span>\n        <span class="sr-only">Image</span>\n        {{imageName}}\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <select-plan available-plans="$ctrl.orderedPlans" selected-plan="$ctrl.selectedPlan" on-plan-select="$ctrl.selectPlan"></select-plan>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div ng-if="!$ctrl.error">\n    <div ng-if="!$ctrl.orderComplete">\n      <div class="results-status">\n        <span class="fa fa-clock-o text-muted" aria-hidden="true"></span>\n        <span class="sr-only">Pending</span>\n        <div class="results-message">\n          <h3>\n            <strong>{{$ctrl.serviceClass.name}}</strong> is being provisioned in <strong>{{$ctrl.projectDisplayName}}</strong>.\n          </h3>\n          <p class="results-message-details">\n            <span ng-if="$ctrl.binding">The binding will be created after the service has been provisioned.</span>\n            This may take several minutes.\n          </p>\n        </div>\n      </div>\n      <p>\n        <a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}" ng-click="$ctrl.closePanel()">Continue to the project overview</a> to check the status of your service.\n      </p>\n    </div>\n  </div>\n  <div class="results-failure" ng-if="$ctrl.error">\n    <div class="results-status">\n      <span class="pficon pficon-error-circle-o text-danger" aria-hidden="true"></span>\n      <span class="sr-only">Error</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.serviceClass.name}}</strong> failed to provision in <strong>{{$ctrl.projectDisplayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n    <div class="sub-title">\n      <span ng-if="$ctrl.error.message" class="error-message">{{$ctrl.error.message}}</span>\n      <span ng-if="!$ctrl.error.message" class="error-message">An error occurred provisioning the service.</span>\n    </div>\n  </div>\n  <div ng-if="$ctrl.orderComplete">\n    <div class="results-status">\n      <span class="pficon pficon-ok" aria-hidden="true"></span>\n      <span class="sr-only">Success</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.serviceClass.name}}</strong> has been added to <strong>{{$ctrl.projectDisplayName}}</strong> successfully.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.orderComplete && $ctrl.binding">\n    <bind-results error="$ctrl.bindError"\n                  binding="$ctrl.binding"\n                  secret-href="$ctrl.selectedProject | secretUrl : $ctrl.baseProjectUrl : $ctrl.binding.spec.secretName"\n                  service-to-bind="$ctrl.serviceInstance.metadata.name"\n                  bind-type="{{$ctrl.bindType}}"\n                  application-to-bind="$ctrl.appToBind.metadata.name"\n                  show-pod-presets="$ctrl.showPodPresets">\n    </bind-results>\n    <p><a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}">Continue to the project overview</a>.</p>\n  </div>\n  <div ng-if="$ctrl.orderComplete && $ctrl.bindType === \'none\'">\n    <p><a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}">Continue to the project overview</a> to bind this service to your application. Binding this service creates a secret containing the information necessary for your application to use the service.</p>\n  </div>\n  <div ng-if="$ctrl.serviceClass.resource.externalMetadata.documentationUrl || $ctrl.serviceClass.resource.externalMetadata.supportUrl || (!$ctrl.error && $ctrl.serviceInstance.status.dashboardURL)">\n    <p class="or" ng-if="!$ctrl.error">- or -</p>\n    <p>Browse resources for {{$ctrl.serviceClass.name}}:</p>\n    <ul class="list-inline">\n      <li ng-if="$ctrl.serviceClass.resource.externalMetadata.documentationUrl">\n        <a ng-href="{{$ctrl.serviceClass.resource.externalMetadata.documentationUrl}}" target="_blank">Documentation <i class="fa fa-external-link" aria-hidden="true"></i></a>\n      </li>\n      <li ng-if="$ctrl.serviceClass.resource.externalMetadata.supportUrl">\n        <a ng-href="{{$ctrl.serviceClass.resource.externalMetadata.supportUrl}}" target="_blank">Support <i class="fa fa-external-link" aria-hidden="true"></i></a>\n      </li>\n      <li ng-if="!$ctrl.error && $ctrl.serviceInstance.status.dashboardURL">\n        <a ng-href="{{$ctrl.serviceInstance.status.dashboardURL}}" target="_blank">Service Dashboard <i class="fa fa-external-link" aria-hidden="true"></i></a>\n      </li>\n    </ul>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.forms.orderConfigureForm" class="config-form">\n      <catalog-parameters\n        ng-if="$ctrl.parameterSchema.properties"\n        model="$ctrl.parameterData"\n        parameter-schema="$ctrl.parameterSchema"\n        parameter-form-definition="$ctrl.parameterFormDefinition">\n      </catalog-parameters>\n    </form>\n    <div ng-if="$ctrl.error" class="has-error">\n      <span class="help-block">{{$ctrl.error}}</span>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <select-plan available-plans="$ctrl.orderedPlans" selected-plan="$ctrl.selectedPlan" on-plan-select="$ctrl.selectPlan"></select-plan>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div ng-if="!$ctrl.error && !$ctrl.orderComplete">\n    <div class="results-status">\n      <span class="fa fa-clock-o text-muted" aria-hidden="true"></span>\n      <span class="sr-only">Updating</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.displayName}}</strong> is being updated in <strong>{{$ctrl.project | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class="results-failure" ng-if="$ctrl.error">\n    <div class="results-status">\n      <span class="pficon pficon-error-circle-o text-danger" aria-hidden="true"></span>\n      <span class="sr-only">Error</span>\n      <div class="results-message">\n        <h3>\n          Failed to update <strong>{{$ctrl.displayName}}</strong> in <strong>{{$ctrl.project | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n    <div class="sub-title">\n      <span ng-if="$ctrl.error.message">\n        {{$ctrl.error.message}}\n      </span>\n      <span ng-if="!$ctrl.error.message">\n        An error occurred updating the service.\n      </span>\n    </div>\n  </div>\n  <div ng-if="$ctrl.orderComplete">\n    <div class="results-status">\n      <span class="pficon pficon-ok" aria-hidden="true"></span>\n      <span class="sr-only">Success</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.displayName}}</strong> has been updated in <strong>{{$ctrl.project | displayName}}</strong> successfully.\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div  class="schema-form-array {{form.htmlClass}}"\n      sf-field-model="sf-new-array"\n      sf-new-array>\n  <label class="control-label" ng-show="showTitle()">{{ form.title }}</label>\n  <span\n    ng-if="form.tooltip"\n    class="pficon pficon-info vendor-info-icon"\n    style="display: inline"\n    data-toggle="tooltip"\n    aria-hidden="true"\n    data-original-title="{{ form.tooltip }}">\n  </span>\n  <ol class="list-group" sf-field-model ui-sortable="form.sortOptions">\n    <li class="list-group-item {{form.fieldHtmlClass}}"\n        schema-form-array-items\n        sf-field-model="ng-repeat"\n        ng-repeat="item in $$value$$ track by $index">\n      <button ng-hide="form.readonly || form.remove === null"\n              ng-click="deleteFromArray($index)"\n              ng-disabled="form.schema.minItems >= modelArray.length"\n              style="position: absolute; z-index: 20; right: 0; top: 12px; font-size: 20px;"\n              type="button" class="close">\n              <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>\n      </button>\n    </li>\n  </ol>\n  <div class="clearfix" style="padding: 15px;" ng-model="modelArray" schema-validate="form">\n    <div class="help-block"\n         ng-show="(hasError() && errorMessage(schemaError())) || form.description"\n         ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div>\n\n    <button ng-hide="form.readonly || form.add === null"\n            ng-click="appendToArray()"\n            ng-disabled="form.schema.maxItems <= modelArray.length"\n            type="button"\n            class="btn {{ form.style.add || \'btn-default\' }} pull-right">\n      {{ form.add || \'Add\'}}\n    </button>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="form-group">\n  <div class="checkbox schema-form-checkbox {{form.htmlClass}}"\n       ng-class="{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}">\n    <label class="{{form.checkboxLabelHtmlClass}}">\n      <input type="checkbox"\n             sf-changed="form"\n             ng-disabled="form.readonly"\n             sf-field-model\n             schema-validate="form"\n             class="{{form.fieldHtmlClass}}"\n             name="{{form.key.slice(-1)[0]}}">\n      <span ng-bind-html="form.title"></span>\n    </label>\n    <span\n      ng-if="form.tooltip"\n      class="pficon pficon-info vendor-info-icon"\n      style="display: inline"\n      data-toggle="tooltip"\n      aria-hidden="true"\n      data-original-title="{{ form.tooltip }}">\n    </span>\n    <div class="help-block {{form.checkboxHelpHtmlClass}}" sf-message="form.description"></div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div sf-field-model="sf-new-array"\n     sf-new-array\n     class="form-group schema-form-checkboxes {{form.htmlClass}}"\n     ng-class="{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}">\n  <label class="control-label {{form.labelHtmlClass}}"\n         sf-field-model\n         schema-validate="form"\n         ng-show="showTitle()">{{form.title}}</label>\n  <span\n    ng-if="form.tooltip"\n    class="pficon pficon-info vendor-info-icon"\n    style="display: inline"\n    data-toggle="tooltip"\n    aria-hidden="true"\n    data-original-title="{{ form.tooltip }}">\n  </span>       \n\n  <div class="{{form.fieldWrapperHtmlClass}}">\n    <div class="checkbox" ng-repeat="val in titleMapValues track by $index" >\n      <label>\n        <input type="checkbox"\n               ng-disabled="form.readonly"\n               sf-changed="form"\n               class="{{form.fieldHtmlClass}}"\n               ng-model="titleMapValues[$index]"\n               name="{{form.key.slice(-1)[0]}}">\n        <span ng-bind-html="form.titleMap[$index].name"></span>\n      </label>\n    </div>\n  </div>\n  <div class="help-block" sf-message="form.description"></div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div>\n  <div class="form-group schema-form-{{form.type}} {{form.htmlClass}}"\n       ng-class="{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }">\n    <label class="control-label {{form.labelHtmlClass}}" ng-class="{required: form.required, \'sr-only\': !showTitle()}" for="{{form.key.slice(-1)[0]}}">{{form.title}}</label>\n    \x3c!-- <span\n      ng-if="form.tooltip"\n      class="pficon pficon-info vendor-info-icon"\n      style="display: inline"\n      data-toggle="tooltip"\n      aria-hidden="true"\n      data-original-title="{{ form.tooltip }}">\n    </span> --\x3e\n\n    <div class="{{form.fieldWrapperHtmlClass}}">\n      <input ng-if="!form.fieldAddonLeft && !form.fieldAddonRight"\n             ng-show="form.key"\n             type="{{form.type}}"\n             step="any"\n             sf-changed="form"\n             placeholder="{{form.placeholder}}"\n             class="form-control {{form.fieldHtmlClass}}"\n             id="{{form.key.slice(-1)[0]}}"\n             sf-field-model\n             ng-disabled="form.readonly"\n             ng-required="form.required"\n             schema-validate="form"\n             name="{{form.key.slice(-1)[0]}}"\n             aria-describedby="{{form.key.slice(-1)[0] + \'Status\'}}">\n\n      <div ng-if="form.fieldAddonLeft || form.fieldAddonRight"\n           ng-class="{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}">\n        <span ng-if="form.fieldAddonLeft"\n              class="input-group-addon"\n              ng-bind-html="form.fieldAddonLeft"></span>\n        <input ng-show="form.key"\n               type="{{form.type}}"\n               step="any"\n               sf-changed="form"\n               placeholder="{{form.placeholder}}"\n               class="form-control {{form.fieldHtmlClass}}"\n               id="{{form.key.slice(-1)[0]}}"\n               sf-field-model\n               ng-disabled="form.readonly"\n               schema-validate="form"\n               name="{{form.key.slice(-1)[0]}}"\n               aria-describedby="{{form.key.slice(-1)[0] + \'Status\'}}">\n\n        <span ng-if="form.fieldAddonRight"\n              class="input-group-addon"\n              ng-bind-html="form.fieldAddonRight"></span>\n      </div>\n\n      <span ng-if="form.feedback !== false"\n            class="form-control-feedback"\n            ng-class="evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }"\n            aria-hidden="true"></span>\n\n      <span ng-if="hasError() || hasSuccess()"\n            id="{{form.key.slice(-1)[0] + \'Status\'}}"\n            class="sr-only">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n      \n      <div class="help-block" sf-message="form.description"></div>\n      <ng-bind-html class="help-block" ng-bind-html="form.doc_url"></ng-bind-html>\n\n    </div>\n  </div>\n  <div ng-if="form.type === \'password\'" class="form-group {{form.htmlClass}}">\n    <label class="control-label {{form.labelHtmlClass}}" ng-class="{required: form.required, \'sr-only\': !showTitle()}" for="retype-{{form.key.slice(-1)[0]}}">Retype {{form.title}}</label>\n    <input type="password"\n           id="retype-{{form.key.slice(-1)[0]}}"\n           name="retype-{{form.key.slice(-1)[0]}}"\n           ng-blur="retypePasswordBlurred = true"\n           ng-model="retypePassword"\n           ng-required="ngModel.$modelValue && !form.readonly && !ngModel.$pristine"\n           ng-disabled="form.readonly || ngModel.$pristine"\n           ng-pattern="ngModel.$modelValue | escapeRegExp"\n           class="form-control {{form.fieldHtmlClass}}">\n    <div class="has-error" ng-if="retypePasswordBlurred && !form.readonly && !ngModel.$pristine && (retypePassword || \'\') !== (ngModel.$modelValue || \'\')">\n      <span class="help-block">{{form.title}} values don\'t match.</span>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="form-group {{form.htmlClass}} schema-form-select"\n     ng-class="{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}">\n   <label class="control-label {{form.labelHtmlClass}}" ng-class="{ required: form.required }" ng-show="showTitle()">\n    {{form.title}}\n  </label>\n  <span\n    ng-if="form.tooltip"\n    class="pficon pficon-info vendor-info-icon"\n    style="display: inline"\n    data-toggle="tooltip"\n    aria-hidden="true"\n    data-original-title="{{ form.tooltip }}">\n  </span>\n  \n  <div class="{{form.fieldWrapperHtmlClass}}">\n    <ui-select sf-field-model\n            ng-disabled="form.readonly"\n            ng-required="form.required"\n            sf-changed="form"\n            schema-validate="form">\n      <ui-select-match>\n        {{$select.selected.name}}\n      </ui-select-match>\n      <ui-select-choices repeat="item.value as item in form.titleMap | filter : $select.search">\n        <span ng-bind-html="item.name | highlightKeywords : $select.search"></span>\n      </ui-select-choices>\n    </ui-select>\n    <div class="help-block" sf-message="form.description"></div>\n  </div>\n</div>\n';
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(56);
    t.catalogFilter = {
        bindings: {
            config: "<",
            vendors: "<",
            filterOnKeyword: "<",
            applyFilters: "&"
        },
        controller: n.CatalogFilterController,
        template: r(43)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(57);
    t.catalogParameters = {
        bindings: {
            parameterSchema: "<",
            parameterFormDefinition: "<",
            isHorizontal: "<?",
            readOnly: "<?",
            opaqueKeys: "<?",
            hideValues: "<?",
            model: "="
        },
        controller: n.CatalogParametersController,
        template: r(44)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(58);
    t.catalogSearch = {
        bindings: {
            baseProjectUrl: "@",
            catalogItems: "<",
            toggleAtMobile: "<?",
            searchToggleCallback: "<?"
        },
        controller: n.CatalogSearchController,
        template: r(45)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(59);
    t.createFromBuilder = {
        bindings: {
            baseProjectUrl: "@",
            imageStream: "<",
            handleClose: "<",
            addToProject: "<?"
        },
        controller: n.CreateFromBuilderController,
        template: r(46)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(60);
    t.landingPage = {
        bindings: {
            baseProjectUrl: "@",
            onTemplateSelected: "&"
        },
        controller: n.LandingPageController,
        template: r(47),
        transclude: {
            landingsearch: "landingsearch",
            landingheader: "landingheader",
            landingbody: "landingbody",
            landingside: "landingside"
        }
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(61);
    t.orderService = {
        bindings: {
            baseProjectUrl: "@",
            serviceClass: "<",
            servicePlans: "<",
            handleClose: "<",
            addToProject: "<?"
        },
        controller: n.OrderServiceController,
        template: r(48)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(62);
    t.overlayPanel = {
        bindings: {
            showClose: "<",
            showPanel: "<",
            handleClose: "<"
        },
        controller: n.OverlayPanelController,
        template: r(49),
        transclude: !0
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(63);
    t.projectsSummary = {
        bindings: {
            baseProjectUrl: "@",
            catalogItems: "<",
            projectsUrl: "@",
            viewEditMembership: "&",
            startTour: "&"
        },
        controller: n.ProjectsSummaryController,
        template: r(50)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(64);
    t.saasList = {
        bindings: {
            saasTitle: "<?",
            saasOfferings: "<"
        },
        controller: n.SaasListController,
        template: r(51)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(65);
    t.selectPlan = {
        bindings: {
            availablePlans: "<",
            selectedPlan: "<",
            onPlanSelect: "<"
        },
        controller: n.SelectPlanController,
        template: r(52)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(66);
    t.selectProject = {
        bindings: {
            selectedProject: "=?",
            preselectProjectName: "@?",
            nameTaken: "<",
            onProjectSelected: "<?",
            onOpen: "<?",
            availableProjects: "<?",
            showDivider: "<?",
            skipCanAddValidation: "<?",
            hideCreateProject: "<?",
            hideLabel: "<?",
            isRequired: "<?"
        },
        controller: n.SelectProjectController,
        template: r(53)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(67);
    t.servicesView = {
        bindings: {
            sectionTitle: "@?",
            baseProjectUrl: "@",
            catalogItems: "<",
            servicePlans: "<",
            keywordFilter: "<?",
            onDeployImageSelected: "<",
            onFromFileSelected: "<",
            onCreateFromProject: "<"
        },
        controller: n.ServicesViewController,
        template: r(54)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(68);
    t.updateService = {
        bindings: {
            displayName: "<",
            project: "<",
            baseProjectUrl: "@",
            serviceInstance: "<",
            serviceClass: "<",
            servicePlans: "<",
            handleClose: "<"
        },
        controller: n.UpdateServiceController,
        template: r(55)
    };
}, function(e, t, r) {
    "use strict";
    (function(e) {
        t.__esModule = !0;
        var n = r(0);
        n.set(window, "OPENSHIFT_CONSTANTS.HELP_BASE_URL", "https://docs.openshift.org/latest/");
        var a = {
            new_app: "dev_guide/application_lifecycle/new_app.html",
            application_health: "dev_guide/application_health.html",
            authorization: "architecture/additional_concepts/authorization.html",
            deployments: "dev_guide/deployments/how_deployments_work.html",
            default: "welcome/index.html"
        };
        n.set(window, "OPENSHIFT_CONSTANTS.HELP", a);
        var i = [ {
            id: 1,
            title: "Microservices Application",
            icon: "fa fa-cubes",
            url: "https://www.redhat.com/en/technologies/virtualization",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }, {
            id: 2,
            title: "Mobile Application",
            icon: "fa fa-user",
            url: "https://www.redhat.com/en/technologies/mobile",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }, {
            id: 3,
            title: "Integration Application",
            icon: "fa fa-plug",
            url: "https://www.redhat.com/en/technologies/cloud-computing",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }, {
            id: 4,
            title: "Business Process Application",
            icon: "fa fa-cubes",
            url: "https://www.redhat.com/en/technologies/management",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.  This is way too long! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        } ], s = [ {
            id: "languages",
            label: "Languages",
            subCategories: [ {
                id: "java",
                label: "Java",
                tags: [ "java" ],
                icon: "icon-openjdk"
            }, {
                id: "javascript",
                tags: [ "javascript", "nodejs", "js" ],
                label: "JavaScript",
                icon: "icon-js"
            }, {
                id: "dotnet",
                label: ".NET",
                tags: [ "dotnet" ],
                icon: "icon-dotnet"
            }, {
                id: "perl",
                label: "Perl",
                tags: [ "perl" ],
                icon: "icon-perl"
            }, {
                id: "ruby",
                label: "Ruby",
                tags: [ "ruby" ],
                icon: "icon-ruby"
            }, {
                id: "php",
                label: "PHP",
                tags: [ "php" ],
                icon: "icon-php"
            }, {
                id: "python",
                label: "Python",
                tags: [ "python" ],
                icon: "icon-python"
            }, {
                id: "golang",
                label: "Go",
                tags: [ "golang", "go" ],
                icon: "icon-go-gopher"
            } ]
        }, {
            id: "databases",
            label: "Databases",
            subCategories: [ {
                id: "mongodb",
                label: "Mongo",
                tags: [ "mongodb" ],
                icon: "icon-mongodb"
            }, {
                id: "mysql",
                label: "MySQL",
                tags: [ "mysql" ],
                icon: "icon-mysql-database"
            }, {
                id: "postgresql",
                label: "Postgres",
                tags: [ "postgresql" ],
                icon: "icon-postgresql"
            }, {
                id: "mariadb",
                label: "MariaDB",
                tags: [ "mariadb" ],
                icon: "icon-mariadb"
            } ]
        }, {
            id: "middleware",
            label: "Middleware",
            subCategories: [ {
                id: "integration",
                label: "Integration",
                tags: [ "amq", "fuse", "jboss-fuse", "sso" ]
            }, {
                id: "process-automation",
                label: "Process Automation",
                tags: [ "decisionserver", "processserver" ]
            }, {
                id: "analytics-data",
                label: "Analytics & Data",
                tags: [ "datagrid", "datavirt" ]
            }, {
                id: "runtimes",
                label: "Runtimes & Frameworks",
                tags: [ "eap", "httpd", "tomcat" ]
            } ]
        }, {
            id: "cicd",
            label: "CI/CD",
            subCategories: [ {
                id: "jenkins",
                label: "Jenkins",
                tags: [ "jenkins" ],
                icon: "icon-jenkins"
            }, {
                id: "pipelines",
                label: "Pipelines",
                tags: [ "pipelines" ],
                icon: "fa fa-clone"
            } ]
        } ];
        n.set(window, "OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES", s), n.set(window, "OPENSHIFT_CONSTANTS.SAAS_OFFERINGS", i);
        var o = {
            pod_presets: !1
        };
        n.set(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE", o);
        var l = {
            links: [ {
                title: "Documentation",
                help: ""
            }, {
                title: "Interactive Learning Portal",
                href: "https://learn.openshift.com"
            }, {
                title: "Local Development ",
                href: "https://www.openshift.org/minishift"
            }, {
                title: "YouTube",
                href: "https://www.youtube.com/user/rhopenshift"
            }, {
                title: "Blog",
                href: "https://blog.openshift.com"
            } ]
        };
        n.set(window, "OPENSHIFT_CONSTANTS.CATALOG_HELP_RESOURCES", l);
        var c = function() {
            e("body").find(".services-view-container .nav-tabs a")[0].click();
        }, g = function() {
            e(e("body").find(".services-view-container .nav-tabs li")[1]).find("a")[0].click(), 
            setTimeout(function() {
                e("body").find(".services-sub-category-tab")[1].click();
            });
        }, C = {
            id: "getting-started-tour",
            steps: [ {
                title: "Create Project",
                content: "Projects allow you to organize and manage your content. Projects require a unique name, and optionally can include a display name, and description",
                target: ".catalog-projects-summary-panel .create-button",
                targetScrollElement: ".landing-side-bar",
                placement: "left"
            }, {
                title: "Search Catalog",
                content: "Search by name, description, keyword, or label to quickly locate items in the catalog that you want to add to your project.",
                target: ".landing-search-area .landing-search-form",
                placement: "bottom",
                fixedElement: !0
            }, {
                title: "Browse Catalog",
                content: "If you don’t know exactly what you are looking for, you can browse all available catalog items under the first tab in the catalog.",
                target: ".services-view-container h1",
                placement: "bottom",
                xOffset: 20,
                delay: 300,
                preShow: c
            }, {
                title: "Browse by Category",
                content: "A secondary level of categorization is available to further narrow your search.",
                target: ".services-view-container .nav-tabs li:nth-child(2)",
                placement: "right",
                delay: 200,
                preShow: g
            }, {
                title: "Configure a Resource",
                content: "Clicking on a catalog item will open a panel allowing you to configure and create within a project.",
                target: ".services-sub-category.active .services-items .services-item",
                placement: "right"
            }, {
                title: "Additional Help",
                content: "Additional resources can be found here or you can always access the help icon in the top banner for more information.",
                target: ".resources-panel",
                targetScrollElement: ".landing-side-bar",
                placement: "left"
            } ]
        }, A = {
            landing_page_tour: {
                enabled: !0,
                auto_launch: !1,
                steps: C
            }
        };
        n.set(window, "OPENSHIFT_CONSTANTS.GUIDED_TOURS", A), n.set(window, "OPENSHIFT_CONSTANTS.PUBLISHER_SYNONYMS", {});
    }).call(t, r(2));
}, function(e, t, r) {
    "use strict";
    function n() {
        return a.escapeRegExp;
    }
    t.__esModule = !0;
    var a = r(0);
    t.escapeRegExpFilter = n;
}, function(e, t, r) {
    "use strict";
    function n() {
        return function(e, t) {
            var r, n = t || "project/";
            return r = a.isString(e) ? e : a.get(e, "metadata.name", ""), n.endsWith("/") || (n += "/"), 
            n + r;
        };
    }
    t.__esModule = !0;
    var a = r(0);
    t.projectUrlFilter = n;
}, function(e, t, r) {
    "use strict";
    function n() {
        return function(e, t, r) {
            var n, i = t || "project/";
            return n = a.isString(e) ? e : a.get(e, "metadata.name", ""), i.endsWith("/") || (i += "/"), 
            i + n + "/browse/secrets/" + r;
        };
    }
    t.__esModule = !0;
    var a = r(0);
    t.secretUrlFilter = n;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e() {}
        return e.prototype.makeAPIObjects = function(e) {
            var t = this.getPorts(e.imageStreamTag), r = n.head(t), a = [ this.makeImageStream(e), this.makeBuildConfig(e), this.makeDeploymentConfig(e, t) ];
            return r && (a = a.concat(this.makeService(e, r), this.makeRoute(e, r))), a;
        }, e.prototype.getPorts = function(e) {
            var t = e.image, r = n.get(t, "dockerImageMetadata.Config.ExposedPorts") || n.get(t, "dockerImageMetadata.ContainerConfig.ExposedPorts", []);
            return this.parsePortsFromSpec(r);
        }, e.prototype.generateSecret = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return e() + e() + e() + e();
        }, e.prototype.parsePortsFromSpec = function(e) {
            var t = [];
            return n.each(e, function(e, r) {
                var n = r.split("/");
                1 === n.length && n.push("tcp");
                var a = parseInt(n[0], 10);
                isNaN(a) ? this.Logger.warn("Container port " + n[0] + " is not a number") : t.push({
                    containerPort: a,
                    protocol: n[1].toUpperCase()
                });
            }), t;
        }, e.prototype.getAnnotations = function() {
            return {
                "openshift.io/generated-by": "OpenShiftWebConsole"
            };
        }, e.prototype.getLabels = function(e) {
            return {
                app: e.name
            };
        }, e.prototype.getPortName = function(e) {
            return (e.containerPort + "-" + e.protocol).toLowerCase();
        }, e.prototype.makeRoute = function(e, t) {
            return {
                kind: "Route",
                apiVersion: "v1",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    to: {
                        kind: "Service",
                        name: e.name
                    },
                    port: {
                        targetPort: this.getPortName(t)
                    },
                    wildcardPolicy: "None"
                }
            };
        }, e.prototype.makeService = function(e, t) {
            return {
                kind: "Service",
                apiVersion: "v1",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    selector: {
                        deploymentconfig: e.name
                    },
                    ports: [ {
                        port: t.containerPort,
                        targetPort: t.containerPort,
                        protocol: t.protocol,
                        name: this.getPortName(t)
                    } ]
                }
            };
        }, e.prototype.makeDeploymentConfig = function(e, t) {
            return {
                apiVersion: "v1",
                kind: "DeploymentConfig",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    replicas: 1,
                    selector: {
                        deploymentconfig: e.name
                    },
                    triggers: [ {
                        type: "ImageChange",
                        imageChangeParams: {
                            automatic: !0,
                            containerNames: [ e.name ],
                            from: {
                                kind: "ImageStreamTag",
                                name: e.name + ":latest"
                            }
                        }
                    }, {
                        type: "ConfigChange"
                    } ],
                    template: {
                        metadata: {
                            labels: n.assignWith({
                                deploymentconfig: e.name
                            }, this.getLabels(e))
                        },
                        spec: {
                            containers: [ {
                                name: e.name,
                                image: e.name + ":latest",
                                ports: t,
                                env: []
                            } ]
                        }
                    }
                }
            };
        }, e.prototype.makeBuildConfig = function(e) {
            var t = {
                apiVersion: "v1",
                kind: "BuildConfig",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    output: {
                        to: {
                            kind: "ImageStreamTag",
                            name: e.name + ":latest"
                        }
                    },
                    source: {
                        git: {
                            ref: e.gitRef || "master",
                            uri: e.repository
                        },
                        type: "Git"
                    },
                    strategy: {
                        type: "Source",
                        sourceStrategy: {
                            from: {
                                kind: "ImageStreamTag",
                                name: e.imageStreamTag.metadata.name,
                                namespace: e.imageStreamTag.metadata.namespace
                            },
                            env: []
                        }
                    },
                    triggers: [ {
                        type: "ImageChange",
                        imageChange: {}
                    }, {
                        type: "ConfigChange"
                    }, {
                        generic: {
                            secret: this.generateSecret()
                        },
                        type: "Generic"
                    }, {
                        github: {
                            secret: this.generateSecret()
                        },
                        type: "GitHub"
                    } ]
                }
            };
            return e.contextDir && (t.spec.source.contextDir = e.contextDir), t;
        }, e.prototype.makeImageStream = function(e) {
            return {
                apiVersion: "v1",
                kind: "ImageStream",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                }
            };
        }, e;
    }();
    t.BuilderAppService = a;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, n, a, i) {
            this.$filter = e, this.$q = t, this.constants = r, this.apiService = n, this.dataService = a, 
            this.logger = i;
        }
        return e.prototype.getCatalogItems = function(e) {
            var t = this, r = this.$q.defer(), n = {}, i = 0, s = 0, o = [], l = function() {
                if (e) {
                    ++i;
                    var a = t.apiService.getPreferredVersion("templates");
                    t.dataService.list(a, {
                        namespace: "openshift"
                    }, null, {
                        partialObjectMetadataList: !0
                    }).then(function(e) {
                        n.templates = e.by("metadata.name");
                    }, function() {
                        o.push("templates");
                    }).finally(function() {
                        t.returnCatalogItems(r, n, ++s, i, o);
                    });
                }
            }, c = this.apiService.getPreferredVersion("clusterserviceclasses");
            this.apiService.apiInfo(c) ? (++i, this.dataService.list(c, {}).then(function(e) {
                n.serviceClasses = a.reject(e.by("metadata.name"), {
                    status: {
                        removedFromBrokerCatalog: !0
                    }
                });
            }, function() {
                o.push("service classes");
            }).finally(function() {
                a.some(n.serviceClasses, {
                    spec: {
                        clusterServiceBrokerName: "template-service-broker"
                    }
                }) || l(), t.returnCatalogItems(r, n, ++s, i, o);
            })) : l(), ++i;
            var g = this.apiService.getPreferredVersion("imagestreams");
            return this.dataService.list(g, {
                namespace: "openshift"
            }).then(function(e) {
                n.imageStreams = e.by("metadata.name");
            }, function() {
                o.push("builder images");
            }).finally(function() {
                t.returnCatalogItems(r, n, ++s, i, o);
            }), r.promise;
        }, e.prototype.getServicePlansForServiceClass = function(e) {
            var t = this.apiService.getPreferredVersion("clusterserviceplans"), r = a.isString(e) ? e : a.get(e, "metadata.name");
            if (r && this.apiService.apiInfo(t)) {
                var n = {
                    http: {
                        params: {
                            fieldSelector: "spec.clusterServiceClassRef.name=" + r
                        }
                    }
                };
                return this.dataService.list(t, {}, a.noop, n);
            }
            return this.$q.when(null);
        }, e.prototype.getServicePlans = function() {
            var e = this.apiService.getPreferredVersion("clusterserviceplans");
            return this.apiService.apiInfo(e) ? this.dataService.list(e, {}) : this.$q.when(null);
        }, e.prototype.groupPlansByServiceClassName = function(e) {
            return a.groupBy(e, "spec.clusterServiceClassRef.name");
        }, e.prototype.getProjectCatalogItems = function(e, t, r, n) {
            var a = this;
            void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = !1);
            var i = this.$q.defer(), s = {
                imageStreams: [],
                templates: []
            }, o = 0, l = 0, c = [], g = this.apiService.getPreferredVersion("imagestreams"), C = this.apiService.getPreferredVersion("templates");
            return t && (o++, this.dataService.list(g, {
                namespace: e
            }).then(function(e) {
                s.imageStreams = e.by("metadata.name");
            }, function() {
                c.push("builder images");
            }).finally(function() {
                a.returnCatalogItems(i, s, ++l, o, c);
            })), r && (o++, this.dataService.list(C, {
                namespace: e
            }, null, {
                partialObjectMetadataList: n
            }).then(function(e) {
                s.templates = e.by("metadata.name");
            }, function() {
                c.push("templates");
            }).finally(function() {
                a.returnCatalogItems(i, s, ++l, o, c);
            })), i.promise;
        }, e.prototype.sortCatalogItems = function(e) {
            return e.sort(function(e, t) {
                var r = a.get(e, "name", "").localeCompare(a.get(t, "name", ""), void 0, {
                    sensitivity: "base"
                });
                return 0 === r && (r = a.get(e, "resource.kind", "").localeCompare(a.get(t, "resource.kind", ""), void 0, {
                    sensitivity: "base"
                })), 0 === r && (r = a.get(e, "resource.metadata.name", "").localeCompare(a.get(t, "resource.metadata.name", ""), void 0, {
                    sensitivity: "base"
                })), r;
            });
        }, e.prototype.convertToServiceItems = function(e, t, r) {
            var n = this, i = a.map(e, function(e) {
                return n.getServiceItem(e);
            });
            return i = i.concat(a.map(t, function(e) {
                return n.getImageItem(e);
            })), i = i.concat(a.map(r, function(e) {
                return n.getTemplateItem(e);
            })), i = a.reject(i, "hidden"), i = this.sortCatalogItems(i);
        }, e.prototype.getServiceItem = function(e) {
            return new s(e, this);
        }, e.prototype.getImageItem = function(e) {
            return new o(e, this);
        }, e.prototype.getTemplateItem = function(e) {
            return new l(e, this);
        }, e.prototype.getPublisherSynonym = function(e) {
            return a.get(this.constants, [ "PUBLISHER_SYNONYMS", e ]) || e;
        }, e.prototype.normalizeIconClass = function(e) {
            return this.$filter("normalizeIconClass")(e);
        }, e.prototype.getImageForIconClass = function(e) {
            return this.$filter("imageForIconClass")(e);
        }, e.prototype.categorizeItems = function(e) {
            var t, r, i = this, s = n.copy(this.constants.SERVICE_CATALOG_CATEGORIES);
            this.createAllAndOtherMainCategories(s);
            var o = a.head(s), l = a.get(o, "subCategories[0]"), c = a.last(s), g = a.get(c, "subCategories[0]");
            return a.each(e, function(e) {
                r = !1, a.each(s, function(n) {
                    n.tags ? i.hasMatchingTags(n.tags, e.tags) && (r = i.categorizeItem(e, n, "all"), 
                    t = i.filterSubCatsByTags(n.subCategories, e.tags), a.isEmpty(t) ? i.categorizeItem(e, n, "other") : a.each(t, function(t) {
                        i.categorizeItem(e, n, t);
                    })) : (t = i.filterSubCatsByTags(n.subCategories, e.tags), a.isEmpty(t) || (r = i.categorizeItem(e, n, "all"), 
                    a.each(t, function(t) {
                        i.categorizeItem(e, n, t);
                    })));
                }), r || i.categorizeItem(e, c, g), i.categorizeItem(e, o, l);
            }), s;
        }, e.prototype.getVendors = function(e) {
            var t = {};
            return a.each(e, function(e) {
                e.vendor && (t[e.vendor] = !0);
            }), a.keys(t).sort();
        }, e.prototype.categorizeItem = function(e, t, r) {
            return a.isString(r) && (r = this.getAllOrOtherSubCategory(t, r)), r.items = a.isArray(r.items) ? r.items.concat([ e ]) : [ e ], 
            t.hasItems = r.hasItems = !0;
        }, e.prototype.createAllAndOtherMainCategories = function(e) {
            e.unshift({
                id: "all",
                label: "All",
                subCategories: [ {
                    id: "all",
                    label: "All"
                } ]
            }), e.push({
                id: "other",
                label: "Other",
                subCategories: [ {
                    id: "all",
                    label: "all"
                } ]
            });
        }, e.prototype.getAllOrOtherSubCategory = function(e, t) {
            var r = a.find(e.subCategories, {
                id: t
            });
            return r || ("other" === t ? (r = {
                id: "other",
                label: "Other"
            }, e.subCategories.push(r)) : (r = {
                id: "all",
                label: "All"
            }, e.subCategories.unshift(r))), r;
        }, e.prototype.hasMatchingTags = function(e, t) {
            return a.some(e, function(e) {
                var r = e.toLowerCase();
                return a.some(t, function(e) {
                    return r === e.toLowerCase();
                });
            });
        }, e.prototype.filterSubCatsByTags = function(e, t) {
            var r = this;
            return a.filter(e, function(e) {
                return r.hasMatchingTags(e.tags, t);
            });
        }, e.prototype.returnCatalogItems = function(e, t, r, n, i) {
            if (!(r < n)) {
                i = a.size(i) ? "Unable to load all content for the catalog. Error loading " + this.formatArray(i) : null;
                var s = this.convertToServiceItems(t.serviceClasses, t.imageStreams, t.templates);
                e.resolve([ s, i ]);
            }
        }, e.prototype.formatArray = function(e) {
            var t = "";
            return 1 === e.length ? t = e[0] : 2 === e.length ? t = e.join(" and ") : e.length > 2 && (t = e.slice(0, -1).join(", ") + ", and " + e.slice(-1)), 
            t + ".";
        }, e;
    }();
    i.$inject = [ "$filter", "$q", "Constants", "APIService", "DataService", "Logger" ], 
    t.CatalogService = i;
    var s = function() {
        function e(e, t) {
            this.resource = e, this.catalogSrv = t, this.imageUrl = this.getImage(), this.iconClass = this.getIcon(), 
            this.name = this.getName(), this.description = this.getDescription(), this.longDescription = this.getLongDescription(), 
            this.tags = this.getTags(), this.kind = "ClusterServiceClass", this.vendor = this.getVendor(), 
            this.hidden = a.includes(this.tags, "hidden");
        }
        return e.prototype.getImage = function() {
            var e = a.get(this.resource, "spec.externalMetadata.imageUrl");
            if (e) return e;
            var t = a.get(this.resource, [ "spec", "externalMetadata", "console.openshift.io/iconClass" ]);
            return this.catalogSrv.getImageForIconClass(t);
        }, e.prototype.getIcon = function() {
            var e = a.get(this.resource, [ "spec", "externalMetadata", "console.openshift.io/iconClass" ]) || "fa fa-clone";
            return this.catalogSrv.normalizeIconClass(e);
        }, e.prototype.getName = function() {
            return a.get(this.resource, "spec.externalMetadata.displayName") || a.get(this.resource, "spec.externalName") || this.resource.metadata.name;
        }, e.prototype.getDescription = function() {
            return a.get(this.resource, "spec.description") || "";
        }, e.prototype.getLongDescription = function() {
            return a.get(this.resource, "spec.externalMetadata.longDescription") || "";
        }, e.prototype.getTags = function() {
            return a.get(this.resource, "spec.tags") || [];
        }, e.prototype.getVendor = function() {
            var e = a.get(this.resource, "spec.externalMetadata.providerDisplayName");
            return this.catalogSrv.getPublisherSynonym(e);
        }, e;
    }();
    t.ServiceItem = s;
    var o = function() {
        function e(e, t) {
            this.resource = e, this.catalogSrv = t, this.builderSpecTagName = this.getBuilderSpecTagName(), 
            this.builderSpecTagName ? (this.tags = this.getTags(), this.imageUrl = this.getImage(), 
            this.iconClass = this.getIcon(), this.name = this.getName(), this.description = this.getDescription(), 
            this.longDescription = this.getLongDescription(), this.kind = "ImageStream", this.vendor = this.getVendor(), 
            this.hidden = !1) : this.hidden = !0;
        }
        return e.prototype.getBuilderSpecTagName = function() {
            var e, t = this;
            return this.resource.status ? (this.resource.spec && this.resource.spec.tags && (e = a.find(this.resource.spec.tags, function(e) {
                var r = a.get(e, "annotations.tags");
                if (r && (r = r.split(/\s*,\s*/), a.includes(r, "builder") && !a.includes(r, "hidden"))) return a.some(t.resource.status.tags, function(t) {
                    return t.tag === e.name;
                });
            })), e ? e.name : null) : null;
        }, e.prototype.getTags = function() {
            return this.catalogSrv.$filter("imageStreamTagTags")(this.resource, this.builderSpecTagName);
        }, e.prototype.getImage = function() {
            var e = this.catalogSrv.$filter("imageStreamTagIconClass")(this.resource, this.builderSpecTagName);
            return this.catalogSrv.getImageForIconClass(e);
        }, e.prototype.getIcon = function() {
            var e = this.catalogSrv.$filter("imageStreamTagIconClass")(this.resource, this.builderSpecTagName);
            return this.catalogSrv.normalizeIconClass(e);
        }, e.prototype.getName = function() {
            var e = this.catalogSrv.$filter("displayName")(this.resource);
            return e || (e = this.resource.metadata.name), e;
        }, e.prototype.getVendor = function() {
            var e = a.get(this.resource, [ "metadata", "annotations", "openshift.io/provider-display-name" ], "");
            return this.catalogSrv.getPublisherSynonym(e);
        }, e.prototype.getDescription = function() {
            return null;
        }, e.prototype.getLongDescription = function() {
            return null;
        }, e;
    }();
    t.ImageItem = o;
    var l = function() {
        function e(e, t) {
            this.resource = e, this.catalogSrv = t, this.imageUrl = this.getImage(), this.iconClass = this.getIcon(), 
            this.name = this.getName(), this.description = this.getDescription(), this.longDescription = this.getLongDescription(), 
            this.tags = this.getTags(), this.kind = "Template", this.vendor = this.getVendor(), 
            this.hidden = a.includes(this.tags, "hidden");
        }
        return e.prototype.getImage = function() {
            var e = a.get(this.resource, "metadata.annotations.iconClass");
            return this.catalogSrv.getImageForIconClass(e);
        }, e.prototype.getIcon = function() {
            var e = a.get(this.resource, "metadata.annotations.iconClass", "fa fa-clone");
            return this.catalogSrv.normalizeIconClass(e);
        }, e.prototype.getName = function() {
            return this.catalogSrv.$filter("displayName")(this.resource);
        }, e.prototype.getDescription = function() {
            return a.get(this.resource, "metadata.annotations.description", "");
        }, e.prototype.getLongDescription = function() {
            return a.get(this.resource, [ "metadata", "annotations", "openshift.io/long-description" ], "");
        }, e.prototype.getTags = function() {
            return a.get(this.resource, "metadata.annotations.tags", "").split(/\s*,\s*/);
        }, e.prototype.getVendor = function() {
            var e = a.get(this.resource, [ "metadata", "annotations", "openshift.io/provider-display-name" ]) || "";
            return this.catalogSrv.getPublisherSynonym(e);
        }, e;
    }();
    t.TemplateItem = l;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e(e) {
            this.$rootScope = e;
        }
        return e.prototype.getItems = function() {
            var e = localStorage.getItem("catalog-recently-viewed-services");
            return e ? JSON.parse(e) : [];
        }, e.prototype.addItem = function(e) {
            var t = this.getItems();
            n.remove(t, function(t) {
                return t === e;
            }), t.unshift(e), t = n.take(t, 4), this.setRecentlyViewedItems(t);
        }, e.prototype.setRecentlyViewedItems = function(e) {
            localStorage.setItem("catalog-recently-viewed-services", JSON.stringify(e)), this.$rootScope.$emit("recently-viewed-updated");
        }, e;
    }();
    a.$inject = [ "$rootScope" ], t.RecentlyViewedServiceItems = a;
}, function(e, t) {
    e.exports = '<pf-filter-panel config="$ctrl.config">\n  <div class="filter-panel-container">\n    <input type="text" ng-model="$ctrl.keywordFilter.value"\n           class="keyword-filter form-control"\n           placeholder="{{$ctrl.keywordFilter.placeholder}}"\n           ng-keypress="$ctrl.onKeywordKeyPress($event)"\n           autocorrect="off"\n           autocapitalize="none"\n           spellcheck="false">\n    <div class="category" ng-repeat="filter in $ctrl.filterPanelModel" ng-if="!$first">\n      {{filter.title}}\n      <span\n        class="pficon pficon-info vendor-info-icon"\n        data-toggle="tooltip"\n        aria-hidden="true"\n        data-original-title="This filter will only apply to items which contain publisher information. Items that do not have a publisher will not be shown in the filter results.">\n      </span>\n      <ul>\n        <li ng-repeat="value in filter.values">\n          <div class="checkbox">\n            <label class="category-option-label">\n              <input type="checkbox"\n                     ng-model="value.selected"\n                     ng-change="$ctrl.filterChanged()">\n              {{value.title}}\n            </label>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</pf-filter-panel>\n';
}, function(e, t) {
    e.exports = '\x3c!-- Use angular-schema-form to show a form based on the parameter JSON schema. --\x3e\n<ng-form class="catalog-parameters" ng-class="{\'readonly\': $ctrl.readOnly}"\n  sf-model="$ctrl.hideValues ? $ctrl.hiddenModel : $ctrl.model"\n  sf-form="$ctrl.parameterForm"\n  sf-schema="$ctrl.readOnly ? $ctrl.readonlyParameterSchema : $ctrl.parameterSchema"\n  sf-options="$ctrl.parameterFormDefaults">\n</ng-form>\n';
}, function(e, t) {
    e.exports = '<div class="catalog-search" ng-class="{\'mobile-shown\': $ctrl.mobileSearchInputShown}">\n  <button\n     ng-if="$ctrl.toggleAtMobile"\n     title="Catalog Search"\n     class="catalog-search-toggle visible-xs-inline-block btn btn-link"\n     ng-click="$ctrl.toggleMobileShowSearchInput()">\n    <i class="fa fa-search" aria-hidden="true"></i>\n    <span class="sr-only">Catalog Search</span>\n  </button>\n  <form role="form" class="landing-search-form search-pf has-button" ng-class="{\'hidden-xs\': $ctrl.toggleAtMobile}">\n    <div class="form-group has-clear">\n      <div class="search-pf-input-group">\n        <label for="search-input" class="sr-only">Search Catalog</label>\n        <span class="fa fa-search catalog-search-icon" aria-hidden="true" ng-click="$ctrl.setSearchInputFocus()"></span>\n        <input\n            id="search-input"\n            type="search"\n            autocomplete="off"\n            ng-keypress="$ctrl.onKeyPress($event)"\n            class="form-control catalog-search-input"\n            placeholder="Search Catalog"\n            ng-model="$ctrl.searchText"\n            uib-typeahead="item.name for item in $ctrl.search($viewValue)"\n            typeahead-on-select="$ctrl.itemSelected($item)"\n            typeahead-focus-first="false"\n            typeahead-template-url="catalog-search/catalog-search-result.html"\n            autocorrect="off"\n            autocapitalize="off"\n            spellcheck="false">\n        <button\n            type="button"\n            ng-if="$ctrl.searchText"\n            ng-click="$ctrl.searchText = \'\'"\n            class="clear">\n          <span class="sr-only">Clear Search Input</span>\n          <span class="pficon pficon-close" aria-hidden="true"></span>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service">\n  <pf-wizard\n       wizard-title="{{$ctrl.imageStream.name}}"\n       hide-sidebar="true"\n       step-class="order-service-wizard-step"\n       current-step="$ctrl.currentStep"\n       wizard-ready="$ctrl.wizardReady"\n       next-title="$ctrl.nextTitle"\n       on-finish="$ctrl.closePanel()"\n       on-cancel="$ctrl.closePanel()"\n       wizard-done="$ctrl.wizardDone">\n    <pf-wizard-step ng-repeat="step in $ctrl.steps track by $index"\n         step-title="{{step.label}}"\n         wz-disabled="{{step.hidden}}"\n         allow-click-nav="step.allowClickNav"\n         next-enabled="step.valid && !$ctrl.updating"\n         prev-enabled="step.prevEnabled"\n         on-show="step.onShow"\n         step-id="{{step.id}}"\n         step-priority="{{$index}}">\n      <div class="wizard-pf-main-inner-shadow-covers">\n        <div class="order-service-config">\n          <div ng-include="step.view" class="wizard-pf-main-form-contents"></div>\n        </div>\n      </div>\n    </pf-wizard-step>\n  </pf-wizard>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="landing-search-area" ng-transclude="landingsearch"></div>\n<div class="landing">\n  <overlay-panel show-panel="$ctrl.orderingPanelVisible" handle-close="$ctrl.closeOrderingPanel">\n    <order-service\n        ng-if="$ctrl.selectedItem.resource.kind === \'ClusterServiceClass\'"\n        base-project-url="{{$ctrl.baseProjectUrl}}"\n        service-class="$ctrl.selectedItem"\n        service-plans="$ctrl.servicePlansForItem"\n        handle-close="$ctrl.closeOrderingPanel">\n    </order-service>\n    <create-from-builder\n        ng-if="$ctrl.selectedItem.resource.kind === \'ImageStream\'"\n        base-project-url="{{$ctrl.baseProjectUrl}}"\n        image-stream="$ctrl.selectedItem"\n        handle-close="$ctrl.closeOrderingPanel">\n    </create-from-builder>\n  </overlay-panel>\n  <div class="landing-main-area">\n    <div class="landing-header-area" ng-transclude="landingheader"></div>\n    <div class="landing-body-area">\n      <div class="landing-body" ng-transclude="landingbody"></div>\n    </div>\n  </div>\n  <div class="landing-side-bar" ng-transclude="landingside"></div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service">\n  <pf-wizard\n       wizard-title="{{$ctrl.serviceName}}"\n       hide-sidebar="true"\n       step-class="order-service-wizard-step"\n       current-step="$ctrl.currentStep"\n       wizard-ready="$ctrl.wizardReady"\n       next-title="$ctrl.nextTitle"\n       on-finish="$ctrl.closePanel()"\n       on-cancel="$ctrl.closePanel()"\n       wizard-done="$ctrl.wizardDone">\n    <pf-wizard-step ng-repeat="step in $ctrl.steps track by step.id"\n         step-title="{{step.label}}"\n         wz-disabled="{{step.hidden}}"\n         allow-click-nav="step.allowClickNav"\n         next-enabled="step.valid && !$ctrl.updating"\n         prev-enabled="step.prevEnabled"\n         on-show="step.onShow"\n         step-id="{{step.id}}"\n         step-priority="{{$index}}">\n      <div class="wizard-pf-main-inner-shadow-covers">\n        <div ng-include="step.view" class="wizard-pf-main-form-contents"></div>\n      </div>\n    </pf-wizard-step>\n  </pf-wizard>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="catalogs-overlay-modal" role="dialog">\n  <div ng-if="$ctrl.shown" class="modal-backdrop fade in"></div>\n  <div ng-if="$ctrl.shown" class="catalogs-overlay-panel-wrapper">\n    <div class="catalogs-overlay-panel-grow-height">\n      <div class="modal-content catalogs-overlay-panel">\n        <a ng-if="$ctrl.showClose" ng-click="$ctrl.closePanel()">\n          <span class="catalogs-overlay-panel-close pficon pficon-close"></span>\n        </a>\n        <div class="catalogs-overlay-panel-body" ng-transclude>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div ng-if="$ctrl.loading" class="catalog-projects-spinner-container">\n  <div class="spinner spinner-inverse spinner-xl"></div>\n</div>\n<div class="catalog-projects-summary-panel" ng-show="!$ctrl.loading">\n  <button ng-if="$ctrl.canCreate" class="create-button btn btn-primary" ng-click="$ctrl.openNewProjectPanel($event)">\n    <span class="fa fa-plus"></span>\n    <span class="create-button-text">Create Project</span>\n  </button>\n  <origin-modal-popup class="catalog-create-project" modal-title="Create Project" shown="$ctrl.newProjectPanelShown" on-close="$ctrl.closeNewProjectPanel" reference-element="$ctrl.modalPopupElement">\n    <create-project is-dialog="true" redirect-action="$ctrl.onNewProject" on-cancel="$ctrl.closeNewProjectPanel"></create-project>\n  </origin-modal-popup>\n  <h2 class="summary-title secondary" ng-if="!$ctrl.projects || !$ctrl.projects.length">Getting Started</h2>\n  <h2 class="summary-title secondary" ng-if="$ctrl.projects && $ctrl.projects.length">\n    <a href="{{$ctrl.projectsUrl}}">My Projects</a>\n  </h2>\n  <div ng-if="!$ctrl.canCreate">\n    <span ng-if="!$ctrl.newProjectMessage">\n      A cluster admin can create a project for you by running the command:\n      <div class="code-block">\n        <code class="projects-instructions-link">oc adm <span class="command-arg">new-project</span> &lt;projectname&gt; <span class="command-arg">--admin={{$ctrl.user.metadata.name || \'&lt;YourUsername&gt;\'}}</span></code>\n      </div>\n    </span>\n    <span ng-if="$ctrl.newProjectMessage" ng-bind-html="$ctrl.newProjectMessage | linky : \'_blank\'"></span>\n  </div>\n  <div ng-if="$ctrl.isProjectListIncomplete">\n    <p class="text-muted">\n      The complete list of your projects could not be loaded. Type a project name to go to that project.\n    </p>\n    <form>\n      <div class="form-group">\n        <label for="typed-project-name">Project Name</label>\n        <div class="input-group">\n          <input\n            class="form-control"\n            type="text"\n            id="typed-project-name"\n            required\n            minlength="2"\n            ng-model="$ctrl.typedProjectName"\n            autocorrect="off"\n            autocapitalize="none"\n            spellcheck="false">\n          <span class="input-group-btn">\n            <button class="btn btn-default go-to-project-button"\n                    type="submit"\n                    ng-disabled="!$ctrl.typedProjectName"\n                    ng-click="$ctrl.goToProject($ctrl.typedProjectName)">\n              <i class="fa fa-arrow-right" aria-hidden="true"></i>\n              <span class="sr-only">Go to Project</span>\n            </button>\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div ng-if="$ctrl.projects && $ctrl.projects.length" class="catalog-project-summary-list">\n    <div class="projects-count">\n      <strong>{{$ctrl.projects.length}}</strong>\n      of\n      <strong>{{$ctrl.totalProjects}}</strong>\n      Projects\n      <a href="{{$ctrl.projectsUrl}}" class="projects-view-all">View All</a>\n    </div>\n    <div id="catalog-projects-summary-list">\n      <div ng-repeat="project in $ctrl.projects track by (project | uid)" class="project-tile tile-click">\n        <div class="dropdown  dropdown-kebab-pf" uib-dropdown="">\n          <button class="btn btn-link uib-dropdown-toggle" type="button" id="dropdownKebab" aria-haspopup="true" aria-expanded="true" uib-dropdown-toggle>\n            <span class="fa fa-ellipsis-v"></span>\n          </button>\n          <ul class="uib-dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebab">\n            <li><a href="" ng-click="$ctrl.onViewMemebership(project)">View Membership</a></li>\n            <li><a href="" ng-click="$ctrl.editProject(project)">Edit Project</a></li>\n            <li>\n              <delete-project\n                  label="Delete Project"\n                  project="project"\n                  type-name-to-confirm="true"\n                  stay-on-current-page="true"\n                  success="$ctrl.onDeleteProject">\n              </delete-project>\n            </li>\n          </ul>\n        </div>\n        <h3 class="project-tile-header">\n          <a href="{{project | projectUrl : $ctrl.baseProjectUrl}}" class="project-title tile-target">{{project | displayName}}</a>\n          <span ng-if="project.status.phase != \'Active\'"\n            data-toggle="popover"\n            data-trigger="hover"\n            data-content="This project has been marked for deletion."\n            class="pficon pficon-warning-triangle-o"></span>\n        </h3>\n        <p class="project-date">\n          <span ng-if="project | displayName : true"><span class="word-break" ng-bind-html="project.metadata.name"></span> &ndash;</span>\n          created\n          <span ng-if="project | annotation : \'openshift.io/requester\'">by <span class="word-break" ng-bind-html="project | annotation : \'openshift.io/requester\'"></span></span>\n          <span am-time-ago="project.metadata.creationTimestamp"></span>\n        </p>\n        <div class="project-description" ng-if="project | description">\n          <truncate-long-text content="project | description" use-word-boundary="true" limit="120"></truncate-long-text>\n        </div>\n        <origin-modal-popup class="catalog-edit-project" modal-title="Edit Project" shown="$ctrl.editProjectPanelShown && $ctrl.edittingProject === project" on-close="$ctrl.closeEditProjectPanel">\n          <edit-project project="$ctrl.edittingProject" is-dialog="true" redirect-action="$ctrl.onEditProject" on-cancel="$ctrl.closeEditProjectPanel"></edit-project>\n        </origin-modal-popup>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.showGetStarted">\n    <div class="getting-started-panel">\n      <h2 class="secondary" ng-if="$ctrl.projects && $ctrl.projects.length > 0">Getting Started</h2>\n      <button ng-if="$ctrl.startTour()" class="getting-started-button btn btn-default hidden-xs" ng-class="{\'with-projects\': $ctrl.projects && $ctrl.projects.length}" ng-click="$ctrl.handleGettingStartedClick()">\n        <span class="fa fa-info-circle fa-2"></span>\n        <span class="getting-started-button-text">Take Home Page Tour</span>\n      </button>\n    </div>\n    <div class="resources-panel">\n      <ul>\n        <li ng-repeat="resource in $ctrl.resourceLinks">\n          <a href="{{resource.href}}" target="_blank" title="{{resource.href}}">{{resource.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div ng-if="$ctrl.recentlyViewedItems.length">\n    <h2 class="secondary">Recently Viewed</h2>\n    <div class="services-view">\n      <a href="" class="services-item" ng-repeat="item in $ctrl.recentlyViewedItems track by (item.resource | uid)"\n           ng-click="$ctrl.orderService(item)">\n        <div ng-if="!item.imageUrl" class="services-item-icon">\n          <span class="{{item.iconClass}}"></span>\n        </div>\n        <div ng-if="item.imageUrl" class="services-item-icon services-item-img">\n          <img ng-src="{{item.imageUrl}}">\n        </div>\n        <div class="services-item-name" title="{{item.name}}" aria-hidden="true">{{item.name}}</div>\n      </a>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<span ng-if="$ctrl.hasSaasOfferings()" class="saas-offerings-container">\n  <h1 ng-if="$ctrl.saasTitle">{{$ctrl.saasTitle}}</h1>\n  <div class="saas-list" ng-class="{\'expanded\': $ctrl.sassListExpanded, \'items-overflow\': $ctrl.itemsOverflow}" items="$ctrl.saasOfferings">\n    <div class="card" ng-repeat="item in $ctrl.saasOfferings">\n      <a ng-href="{{item.url}}" target="_blank" class="card-content">\n        <div class="card-icon">\n          <img ng-if="item.image" ng-src="{{item.image}}" alt="">\n          <span ng-if="!item.image" class="icon {{item.icon}}" aria-hidden="true"></span>\n        </div>\n        <div class="card-title">{{item.title}}</div>\n        <truncate-long-text\n                class="card-description hidden-xs"\n                content="item.description"\n                limit="120"\n                use-word-boundary="true">\n        </truncate-long-text>\n      </a>\n    </div>\n  </div>\n  <div ng-if="$ctrl.itemsOverflow" class="sass-list-expander-container">\n    <a href="" class="sass-list-expander" ng-class="{\'expanded\': $ctrl.sassListExpanded}" ng-click="$ctrl.toggleListExpand()">\n      Show <span class="more">More</span><span class="less">Less</span>\n    </a>\n  </div>\n</span>\n';
}, function(e, t) {
    e.exports = '<div class="select-plans">\n  <h3 ng-if="$ctrl.availablePlans.length > 1">Select a Plan</h3>\n  <div ng-if="$ctrl.availablePlans.length" ng-repeat="plan in $ctrl.availablePlans track by plan.metadata.uid" ng-class="{\'radio\': $ctrl.availablePlans.length > 1}">\n    <label>\n      <input ng-if="$ctrl.availablePlans.length > 1"\n             type="radio"\n             ng-model="$ctrl.planIndex"\n             ng-change="$ctrl.onPlanSelect(plan)"\n             value="{{$index}}">\n      <span class="plan-name">{{plan.spec.externalMetadata.displayName || plan.spec.externalName}}</span>\n      <div class="plan-description" ng-if="plan.spec.description" ng-bind-html="plan.spec.description | linkify : \'_blank\'"></div>\n    </label>\n  </div>\n  <div ng-if="!$ctrl.availablePlans.length" class="blank-slate-pf">\n    <div class="blank-slate-pf-icon">\n      <span class="pficon pficon-info"></span>\n    </div>\n    <h1>\n      No Plans Available\n    </h1>\n    <p>\n      There are no plans currently available for this service.\n    </p>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<span ng-if="$ctrl.noProjectsCantCreate" class="no-projects-cant-create">\n  <pf-empty-state config="$ctrl.noProjectsConfig"></pf-empty-state>\n  <p ng-if="!$ctrl.noProjectsCantCreateMessage">\n    A cluster admin can create a project for you by running the command:\n    <div class="code-block">\n      <code>oc adm <span class="command-arg">new-project</span> &lt;projectname&gt; <span class="command-arg">--admin={{$ctrl.user.metadata.name || \'&lt;YourUsername&gt;\'}}</span></code>\n    </div>\n  </p>\n  <div ng-if="$ctrl.noProjectsCantCreateMessage" ng-bind-html="$ctrl.noProjectsCantCreateMessage | linky : \'_blank\'"></div>\n</span>\n\n\x3c!-- Use `ng-show` instead of `ng-if` so that the form exists and the `canI` works when projects load. --\x3e\n<ng-form name="$ctrl.forms.selectProjectForm" ng-show="$ctrl.numProjectChoices >= 1">\n  <div class="form-group" ng-class="{\'has-error\' : $ctrl.forms.selectProjectForm.selectProject.$error.cannotAddToProject ||\n                                                   ($ctrl.forms.selectProjectForm.selectProject.$touched &&\n                                                    $ctrl.forms.selectProjectForm.selectProject.$invalid)}">\n    <h3 ng-if="$ctrl.canOnlyCreateProject()">Create Project</h3>\n    <label ng-if="!$ctrl.canOnlyCreateProject() && !$ctrl.hideLabel" class="control-label required">Add to Project</label>\n    <ui-select\n        ng-if="!$ctrl.canOnlyCreateProject()"\n        ng-disabled="$ctrl.numProjectChoices === 1"\n        name="selectProject"\n        ng-model="$ctrl.selectedProject"\n        ng-change="$ctrl.onSelectProjectChange()"\n        ng-required="$ctrl.isRequired"\n        search-enabled="$ctrl.searchEnabled"\n        uis-open-close="$ctrl.onOpenClose(isOpen)">\n      <ui-select-match placeholder="{{$ctrl.placeholder}}">\n        {{$select.selected | displayName}}\n      </ui-select-match>\n      \x3c!-- refresh-delay must be set using ng-attr-refresh-delay to work as a dynamic value --\x3e\n      <ui-select-choices\n          repeat="project in $ctrl.getProjectChoices() track by (project | uid)"\n          refresh="$ctrl.refreshChoices($select.search)"\n          ng-attr-refresh-delay="{{$ctrl.refreshDelay}}"\n          group-by="$ctrl.groupChoicesBy">\n        <span ng-bind-html="project | displayName | highlightKeywords : $select.search"></span>\n        <span ng-if="project | displayName : true" class="small text-muted">\n          <span ng-if="project.metadata.name">&ndash;</span>\n          <span ng-bind-html="project.metadata.name | highlightKeywords : $select.search"></span>\n        </span>\n      </ui-select-choices>\n    </ui-select>\n    <div ng-if="$ctrl.forms.selectProjectForm.selectProject.$error.cannotAddToProject">\n        <span class="help-block">\n          You are not authorized to add to this project.\n        </span>\n    </div>\n    <div class="has-error" ng-if="$ctrl.forms.selectProjectForm.selectProject.$error.required &&\n                                  $ctrl.forms.selectProjectForm.selectProject.$touched">\n      <span class="help-block">\n        Please select <span ng-if="$ctrl.canCreate && !$ctrl.hideCreateProject">or create</span> a project.\n      </span>\n    </div>\n  </div>\n</ng-form>\n\n<ng-form name="$ctrl.forms.createProjectForm"\n    ng-if="$ctrl.isNewProject()">\n  <div class="form-group">\n    <label for="name" class="control-label required">Project Name</label>\n    <div ng-class="{\'has-error\': ($ctrl.forms.createProjectForm.name.$error.pattern && $ctrl.forms.createProjectForm.name.$touched) ||\n                                 $ctrl.nameTaken || $ctrl.forms.createProjectForm.name.$error.oscUnique}">\n      <input class="form-control"\n          name="name"\n          id="name"\n          placeholder="my-project"\n          type="text"\n          required\n          take-focus\n          minlength="2"\n          maxlength="63"\n          pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?"\n          aria-describedby="nameHelp"\n          ng-model="$ctrl.selectedProject.metadata.name"\n          osc-unique="$ctrl.existingProjectNames"\n          ng-model-options="{ updateOn: \'default blur\' }"\n          ng-change="$ctrl.onNewProjectNameChange()"\n          autocorrect="off"\n          autocapitalize="off"\n          spellcheck="false">\n    </div>\n    <div class="help-block">A unique name for the project.</div>\n    <div class="has-error" ng-if="$ctrl.forms.createProjectForm.name.$error.minlength && $ctrl.forms.createProjectForm.name.$touched">\n      <span id="nameHelp" class="help-block">\n        Name must have at least two characters.\n      </span>\n    </div>\n    <div class="has-error" ng-if="$ctrl.forms.createProjectForm.name.$error.pattern && $ctrl.forms.createProjectForm.name.$touched">\n      <span id="nameHelp" class="help-block">\n        Project names may only contain lower-case letters, numbers, and dashes.\n        They may not start or end with a dash.\n      </span>\n    </div>\n    <div class="has-error" ng-if="$ctrl.nameTaken || $ctrl.forms.createProjectForm.name.$error.oscUnique">\n      <span class="help-block">\n        This name is already in use. Please choose a different name.\n      </span>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <label for="displayName" class="control-label">Project Display Name</label>\n    <input class="form-control"\n      name="displayName"\n      id="displayName"\n      placeholder="My Project"\n      type="text"\n      ng-model="$ctrl.selectedProject.metadata.annotations[\'new-display-name\']">\n  </div>\n\n  <div class="form-group">\n    <label for="description" class="control-label">Project Description</label>\n    <textarea class="form-control"\n      name="description"\n      id="description"\n      placeholder="A short description."\n      ng-model="$ctrl.selectedProject.metadata.annotations[\'openshift.io/description\']"></textarea>\n  </div>\n</ng-form>\n<div ng-if="!$ctrl.noProjectsCantCreate && $ctrl.showDivider" class="select-project-divider"></div>\n\n';
}, function(e, t) {
    e.exports = '<div class="services-view" ng-style="$ctrl.viewStyle">\n  <div ng-if="!$ctrl.loaded" class="spinner-container">\n    <div class="spinner spinner-xl"></div>\n  </div>\n  <div ng-if="$ctrl.loaded" class="services-view-container mobile-{{$ctrl.mobileView}}-view">\n    <div class="add-methods">\n      <h1>{{$ctrl.sectionTitle}}</h1>\n      <div ng-if="$ctrl.onDeployImageSelected || $ctrl.onFromFileSelected || $ctrl.onCreateFromProject">\n        <ul class="add-other hidden-md hidden-lg">\n          <li uib-dropdown="" class="dropdown">\n            <a uib-dropdown-toggle="" class="dropdown-toggle" id="add-methods-dropdown" href="" aria-haspopup="true" aria-expanded="false">\n              Custom Add\n              <span class="caret" aria-hidden="true"></span>\n            </a>\n            <ul class="uib-dropdown-menu dropdown-menu pull-right" aria-labelledby="add-methods-dropdown">\n              \x3c!-- note these are duplicated below --\x3e\n              <li ng-if="$ctrl.onDeployImageSelected">\n                <a href="" ng-click="$ctrl.onDeployImageSelected()">Deploy Image</a>\n              </li>\n              <li ng-if="$ctrl.onFromFileSelected">\n                <a href="" ng-click="$ctrl.onFromFileSelected()">Import YAML / JSON</a>\n              </li>\n              <li ng-if="$ctrl.onCreateFromProject">\n                <a href="" ng-click="$ctrl.onCreateFromProject()">Select from Project</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n        <ul class="add-other hidden-xs hidden-sm">\n          \x3c!-- note these are duplicated above --\x3e\n          <li ng-if="$ctrl.onDeployImageSelected">\n            <a href="" ng-click="$ctrl.onDeployImageSelected()">Deploy Image</a>\n          </li>\n          <li ng-if="$ctrl.onFromFileSelected">\n            <a href="" ng-click="$ctrl.onFromFileSelected()">Import YAML / JSON</a>\n          </li>\n          <li ng-if="$ctrl.onCreateFromProject">\n            <a href="" ng-click="$ctrl.onCreateFromProject()">Select from Project</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ul class="nav nav-tabs nav-tabs-pf services-categories">\n      <li ng-repeat="category in $ctrl.categories"\n          ng-if="category.hasItems"\n          ng-class="{ active: $ctrl.currentFilter === category.id }">\n        <a href="" id="{{\'category-\'+category.id}}" class="services-category-heading" ng-click="$ctrl.selectCategory(category.id)">{{category.label}}</a>\n        <a ng-click="$ctrl.mobileView = \'categories\'" class="services-back-link" href="">Back</a>\n      </li>\n    </ul>\n\n    <div class="services-inner-container">\n      \x3c!-- Do not show sub-category items for \'All\' or \'Other\' main categories --\x3e\n      <ul class="services-sub-categories"\n          ng-if="$ctrl.currentFilter !== \'other\' && $ctrl.currentFilter !== \'all\'">\n        <li ng-repeat="subCategory in $ctrl.subCategories track by subCategory.id"\n             ng-if="subCategory.hasItems"\n             ng-attr-id="{{subCategory.id}}"\n             class="services-sub-category"\n             ng-class="{ active: $ctrl.currentSubFilter === subCategory.id }">\n          <a href="" id="{{\'services-sub-category-\'+subCategory.id}}"\n             class="services-sub-category-tab" ng-click="$ctrl.selectSubCategory(subCategory.id)">\n            <div class="services-sub-category-tab-image" ng-if="imageUrl = (subCategory.imageUrl || (subCategory.icon | imageForIconClass))">\n              <img ng-src="{{imageUrl}}" alt="">\n            </div>\n            <div class="services-sub-category-tab-icon {{subCategory.icon | normalizeIconClass}}"\n                ng-if="subCategory.icon && !subCategory.imageUrl && !(subCategory.icon | imageForIconClass)"></div>\n            <div class="services-sub-category-tab-name">{{subCategory.label}}</div>\n          </a>\n         <a ng-click="$ctrl.mobileView = \'subcategories\'" class="services-back-link" href="">Back</a>\n          <div ng-if="$ctrl.currentSubFilter === subCategory.id" class="services-items">\n            <catalog-filter class="services-items-filter"\n                            config="$ctrl.filterConfig"\n                            vendors="$ctrl.vendors"\n                            filter-on-keyword="$ctrl.keywordFilterValue"\n                            apply-filters="$ctrl.applyFilters($event)">\n            </catalog-filter>\n            <div class="pf-empty-state" ng-if="$ctrl.filterConfig.appliedFilters.length > 0 && $ctrl.filterConfig.resultsCount === 0">\n              <pf-empty-state config="$ctrl.emptyFilterConfig"></pf-empty-state>\n            </div>\n            <a href="" class="services-item" ng-repeat="item in $ctrl.filteredItems track by item.resource.metadata.uid" ng-click="$ctrl.serviceViewItemClicked(item)">\n              <div ng-if="!item.imageUrl" class="services-item-icon">\n                <span class="{{item.iconClass}}"></span>\n              </div>\n              <div ng-if="item.imageUrl" class="services-item-icon">\n                <img ng-src="{{item.imageUrl}}" alt="">\n              </div>\n              <div class="services-item-name" title="{{item.name}}">\n                {{item.name}}\n              </div>\n            </a>\n          </div>\n        </li>\n      </ul>\n\n      \x3c!-- Show catalog item for \'All\' and \'Other\' main categories --\x3e\n      <div ng-if="$ctrl.currentFilter === \'other\' || $ctrl.currentFilter === \'all\'" class="services-no-sub-categories">\n        <div class="services-items" ng-class="{\'no-items-available\': $ctrl.isEmpty}">\n          <div ng-if="$ctrl.isEmpty">\n            <div class="pf-empty-state">\n              <pf-empty-state config="$ctrl.noItemsConfig"></pf-empty-state>\n            </div>\n          </div>\n          <catalog-filter ng-if="!$ctrl.isEmpty"\n                          class="services-items-filter"\n                          config="$ctrl.filterConfig"\n                          vendors="$ctrl.vendors"\n                          filter-on-keyword="$ctrl.keywordFilterValue"\n                          apply-filters="$ctrl.applyFilters($event)">\n          </catalog-filter>\n          <div class="pf-empty-state" ng-if="$ctrl.filterConfig.appliedFilters.length > 0 && $ctrl.filterConfig.resultsCount === 0">\n            <pf-empty-state config="$ctrl.emptyFilterConfig"></pf-empty-state>\n          </div>\n          <a href="" class="services-item" ng-repeat="item in $ctrl.filteredItems track by item.resource.metadata.uid" ng-click="$ctrl.serviceViewItemClicked(item)">\n            <div ng-if="!item.imageUrl" class="services-item-icon">\n              <span class="{{item.iconClass}}"></span>\n            </div>\n            <div ng-if="item.imageUrl" class="services-item-icon">\n              <img ng-src="{{item.imageUrl}}" alt="">\n            </div>\n            <div class="services-item-name" title="{{item.name}}">\n              {{item.name}}\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service">\n  <pf-wizard wizard-title="{{$ctrl.displayName}}"\n             hide-sidebar="true"\n             step-class="order-service-wizard-step"\n             wizard-ready="$ctrl.wizardReady"\n             next-title="$ctrl.nextTitle"\n             on-finish="$ctrl.closePanel()"\n             on-cancel="$ctrl.closePanel()"\n             wizard-done="$ctrl.wizardDone"\n             hide-back-button="{{$ctrl.hideBackButton}}">\n    <pf-wizard-step ng-repeat="step in $ctrl.steps track by step.id"\n                    step-title="{{step.label}}"\n                    wz-disabled="{{step.hidden}}"\n                    allow-click-nav="step.allowClickNav"\n                    next-enabled="step.valid && !$ctrl.updating"\n                    prev-enabled="step.prevEnabled"\n                    on-show="step.onShow"\n                    step-id="{{step.id}}"\n                    step-priority="{{$index}}">\n      <div class="wizard-pf-main-inner-shadow-covers">\n        <div ng-include="step.view" class="wizard-pf-main-form-contents"></div>\n      </div>\n    </pf-wizard-step>\n  </pf-wizard>\n</div>\n';
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r) {
            var i = this;
            this.ctrl = this, this.onKeywordKeyPress = function(e) {
                if (13 === e.which && i.ctrl.keywordFilter.value.length > 0) {
                    var t = i.ctrl.keywordFilter.value;
                    i.keywordFilterExists(t) ? i.highlightKeywordFilter(t) : (i.ctrl.keywordFilter.values.push(t), 
                    i.constructFiltersFromModel()), delete i.ctrl.keywordFilter.value;
                }
            }, this.filterChanged = function() {
                i.constructFiltersFromModel();
            }, this.keywordFilterExists = function(e) {
                return a.some(i.ctrl.keywordFilter.values, function(t) {
                    return e.toLowerCase() === t.toLowerCase();
                });
            }, this.highlightKeywordFilter = function(e) {
                var t = document.querySelectorAll("pf-filter-panel-results .label-info"), r = a.find(t, function(t) {
                    return t.innerText.trim() === "Keyword:" + e.toLowerCase();
                });
                r && (i.$timeout(function() {
                    r.classList.add("flash-filter-tag");
                }, 100), i.$timeout(function() {
                    r.classList.remove("flash-filter-tag");
                }, 300));
            }, this.onFilterChange = function(e, t, r) {
                n.isDefined(t) && n.isDefined(r) ? i.updateFilterPanelModel(t, r) : i.resetFilterPanelModel(), 
                i.constructFiltersFromModel();
            }, this.$scope = e, this.$timeout = t, this.Catalog = r, this.ctrl.filterPanelModel = [], 
            this.ctrl.keywordFilter = {
                id: "keyword",
                title: "Keyword",
                placeholder: "Filter by Keyword",
                filterType: "text",
                values: []
            }, this.ctrl.filterPanelModel.push(this.ctrl.keywordFilter);
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.filterOnKeyword && (this.ctrl.keywordFilter.values = [ this.ctrl.filterOnKeyword ], 
            this.constructFiltersFromModel()), this.ctrl.config.onFilterChange = this.onFilterChange, 
            this.removeClearFilterListener = this.$scope.$on("clear-filters", function() {
                e.resetFilterPanelModel(), e.constructFiltersFromModel();
            });
        }, e.prototype.$onChanges = function(e) {
            e.filterOnKeyword && e.filterOnKeyword.currentValue && this.ctrl.keywordFilter && (this.resetFilterPanelModel(), 
            this.ctrl.keywordFilter.values = [ this.ctrl.filterOnKeyword ], this.constructFiltersFromModel()), 
            e.vendors && e.vendors.currentValue && (a.isEmpty(this.ctrl.vendors) || (this.ctrl.VendorFilter ? this.ctrl.VendorFilter.values = this.getVendorValues(this.ctrl.vendors) : (this.ctrl.VendorFilter = {
                id: "vendors",
                title: "Publisher",
                filterType: "checkbox",
                values: this.getVendorValues(this.ctrl.vendors)
            }, this.ctrl.filterPanelModel.push(this.ctrl.VendorFilter))));
        }, e.prototype.$onDestroy = function() {
            this.removeClearFilterListener();
        }, e.prototype.getVendorValues = function(e) {
            return a.map(e, function(e) {
                return {
                    id: e,
                    title: e,
                    value: e,
                    selected: !1
                };
            });
        }, e.prototype.createAppliedFilter = function(e, t) {
            return {
                id: e.id,
                title: e.title,
                filterType: e.filterType,
                values: t
            };
        }, e.prototype.constructFiltersFromModel = function() {
            var e = this, t = [];
            a.each(this.ctrl.filterPanelModel, function(r) {
                if (!a.isEmpty(r.values)) if ("checkbox" === r.filterType) {
                    var n = [];
                    a.each(r.values, function(e) {
                        e.selected && n.push(e.value);
                    }), a.isEmpty(n) || t.push(e.createAppliedFilter(r, n));
                } else a.each(r.values, function(n) {
                    t.push(e.createAppliedFilter(r, [ n ]));
                });
            }), this.ctrl.config.appliedFilters = t, this.ctrl.applyFilters && this.ctrl.applyFilters({
                $event: {
                    appliedFilters: this.ctrl.config.appliedFilters
                }
            });
        }, e.prototype.updateFilterPanelModel = function(e, t) {
            var r = a.find(this.ctrl.filterPanelModel, {
                id: e
            });
            switch (r.filterType) {
              case "text":
                a.remove(r.values, function(e) {
                    return e === t;
                });
                break;

              case "checkbox":
                a.find(r.values, {
                    value: t
                }).selected = !1;
            }
        }, e.prototype.resetFilterPanelModel = function() {
            a.each(this.ctrl.filterPanelModel, function(e) {
                if (!a.isEmpty(e.values)) switch (e.filterType) {
                  case "text":
                    e.values = [];
                    break;

                  case "checkbox":
                    a.each(e.values, function(e) {
                        e.selected = !1;
                    });
                }
            });
        }, e;
    }();
    i.$inject = [ "$scope", "$timeout", "Catalog" ], t.CatalogFilterController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = r(1), i = r(69), s = function() {
        function e() {
            this.ctrl = this;
        }
        return e.prototype.$onInit = function() {
            this.setupFormDefaults(), this.ctrl.parameterForm = this.cloneParameterForm(this.ctrl.parameterFormDefinition) || [ "*" ], 
            this.updateHiddenModel(), this.setupReadonlySchema();
        }, e.prototype.$onChanges = function(e) {
            (e.parameterFormDefinition && !e.parameterFormDefinition.isFirstChange() || e.hideValues && !e.hideValues.isFirstChange() || e.readOnly && !e.readOnly.isFirstChange()) && (this.ctrl.parameterForm = this.cloneParameterForm(this.ctrl.parameterFormDefinition) || [ "*" ]), 
            e.isHorizontal && !e.isHorizontal.isFirstChange() && this.setupFormDefaults(), (e.hideValues && !e.hideValues.isFirstChange() || e.model && !e.model.isFirstChange()) && this.updateHiddenModel(), 
            (e.parameterSchema && !e.parameterSchema.isFirstChange() || e.readOnly && !e.readOnly.isFirstChange()) && this.setupReadonlySchema();
        }, e.prototype.setupFormDefaults = function() {
            this.ctrl.parameterFormDefaults = {
                formDefaults: {
                    disableSuccessState: !0,
                    feedback: !1
                },
                pristine: {
                    errors: !1,
                    success: !0
                }
            }, this.ctrl.isHorizontal && a.extend(this.ctrl.parameterFormDefaults.formDefaults, {
                htmlClass: "row",
                labelHtmlClass: "col-sm-4",
                fieldWrapperHtmlClass: "col-sm-8",
                checkboxLabelHtmlClass: "col-sm-8 col-sm-offset-4",
                checkboxHelpHtmlClass: "col-sm-8 col-sm-offset-4"
            });
        }, e.prototype.setupReadonlySchema = function() {
            var e = this;
            this.ctrl.parameterSchema && this.ctrl.readOnly && (this.ctrl.readonlyParameterSchema = a.copy(this.ctrl.parameterSchema), 
            n.set(this.ctrl.readonlyParameterSchema, "readonly", !0), n.set(this.ctrl.readonlyParameterSchema, "required", []), 
            n.each(n.get(this.ctrl.readonlyParameterSchema, "properties"), function(t) {
                e.updateReadonlyProperty(t);
            }));
        }, e.prototype.updateReadonlyProperty = function(e) {
            var t = this;
            e.title && (e.title = e.title + ":"), "object" === e.type ? n.each(n.get(e, "properties"), function(e) {
                t.updateReadonlyProperty(e);
            }) : "array" === e.type ? this.updateReadonlyProperty(n.get(e, "items")) : (e.description = void 0, 
            e.enum = void 0, "array" !== e.type && "number" !== e.type && "integer" !== e.type && "boolean" !== e.type || (e.type = "string"));
        }, e.prototype.updateValueToHidden = function(e) {
            var t = this;
            return n.isObject(e) || n.isArray(e) ? n.mapValues(e, function(e, r) {
                return n.includes(t.ctrl.opaqueKeys, r) ? e : t.updateValueToHidden(e);
            }) : n.isArray(e) ? n.map(e, function(e) {
                return t.updateValueToHidden(e);
            }) : "*****";
        }, e.prototype.updateHiddenModel = function() {
            var e = this;
            this.ctrl.hideValues && (this.ctrl.hiddenModel = n.mapValues(this.ctrl.model, function(t, r) {
                return n.includes(e.ctrl.opaqueKeys, r) ? t : e.updateValueToHidden(t);
            }));
        }, e.prototype.cloneParameterForm = function(t) {
            if (n.isString(t)) return !0 === this.ctrl.readOnly ? {
                key: t,
                type: this.ctrl.hideValues ? "password" : "string"
            } : t;
            if (n.isArray(t)) return n.map(t, n.bind(this.cloneParameterForm, this));
            if (n.isObject(t)) {
                var r = {};
                if (t.key && (r.key = t.key), t.doc_url) {
                    var a = new i.Converter().makeHtml(t.doc_url);
                    r.doc_url = a;
                }
                if (e.ALLOWED_FORM_INPUT_TYPES[t.type] && (r.type = t.type), "fieldset" === r.type && n.isArray(t.items)) t.title && (r.title = t.title), 
                r.items = this.cloneParameterForm(t.items); else {
                    if (!r.key && !r.type) return null;
                    this.ctrl.readOnly && (r.type = this.ctrl.hideValues ? "password" : "string");
                }
                return r;
            }
        }, e;
    }();
    s.ALLOWED_FORM_INPUT_TYPES = {
        fieldset: !0,
        text: !0,
        textarea: !0,
        password: !0,
        checkbox: !0,
        select: !0
    }, t.CatalogParametersController = s;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = r(2), i = function() {
        function e(e, t, r, n, a, i) {
            var s = this;
            this.ctrl = this, this.loaded = !1, this.maxResultsToShow = 5, this.onKeyPress = function(e) {
                13 === e.which && s.ctrl.searchText && (s.$rootScope.$emit("filter-catalog-items", {
                    searchText: s.ctrl.searchText
                }), s.ctrl.searchText = "");
            }, this.$rootScope = e, this.$scope = t, this.$timeout = r, this.$q = n, this.Catalog = a, 
            this.KeywordService = i;
        }
        return e.prototype.$onInit = function() {
            this.ctrl.searchText = "";
        }, e.prototype.$onChanges = function(e) {
            if (e.catalogItems && this.ctrl.catalogItems && (this.loaded = !0, this.searchDeferred)) {
                var t = this.filterForKeywords(this.ctrl.searchText);
                this.searchDeferred.resolve(t), this.searchDeferred = null;
            }
        }, e.prototype.itemSelected = function(e) {
            "viewAll" === e.id ? this.$rootScope.$emit("filter-catalog-items", {
                searchText: this.ctrl.searchText
            }) : "viewNone" !== e.id && this.$scope.$emit("open-overlay-panel", e), this.ctrl.searchText = "", 
            this.ctrl.mobileSearchInputShown = !1, n.isFunction(this.ctrl.searchToggleCallback) && this.ctrl.searchToggleCallback(this.ctrl.mobileSearchInputShown);
        }, e.prototype.search = function(e) {
            return e ? this.loaded ? this.filterForKeywords(e) : (this.searchDeferred = this.$q.defer(), 
            this.searchDeferred.promise) : [];
        }, e.prototype.toggleMobileShowSearchInput = function() {
            this.ctrl.mobileSearchInputShown = !this.ctrl.mobileSearchInputShown, this.ctrl.searchText = "", 
            n.isFunction(this.ctrl.searchToggleCallback) && this.ctrl.searchToggleCallback(this.ctrl.mobileSearchInputShown), 
            this.ctrl.mobileSearchInputShown && this.setSearchInputFocus(0);
        }, e.prototype.setSearchInputFocus = function(e) {
            var t = this, r = a(".catalog-search-input");
            r.is(":visible") ? r.focus() : e < 5 && this.$timeout(function() {
                t.setSearchInputFocus(e + 1);
            }, 100);
        }, e.prototype.filterForKeywords = function(e) {
            var t = this.KeywordService.generateKeywords(e), r = this.KeywordService.filterForKeywords(this.ctrl.catalogItems, [ "name", "tags" ], t), a = n.size(r), i = n.take(r, this.maxResultsToShow);
            return 0 === a ? i.push({
                id: "viewNone",
                text: "No results found for Keyword: " + e,
                name: e
            }) : 1 === a ? i.push({
                id: "viewAll",
                text: "View the result for Keyword: " + e,
                name: e
            }) : a > 1 && i.push({
                id: "viewAll",
                text: "View all " + a + " results for Keyword: " + e,
                name: e
            }), i;
        }, e;
    }();
    i.$inject = [ "$rootScope", "$scope", "$timeout", "$q", "Catalog", "KeywordService" ], 
    t.CatalogSearchController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = r(70), s = function() {
        function e(e, t, r, n, i, s, o, l, c, g, C, A) {
            var I = this;
            this.ctrl = this, this.watches = [], this.clearValidityWatcher = function() {
                I.validityWatcher && (I.validityWatcher(), I.validityWatcher = void 0);
            }, this.showInfo = function() {
                I.clearValidityWatcher(), I.ctrl.nextTitle = "Next >";
            }, this.showConfig = function() {
                I.ctrl.currentStep = "Configuration", I.clearValidityWatcher(), I.ctrl.nextTitle = I.bindStep.hidden ? "Create" : "Next >", 
                I.reviewStep.allowed = I.bindStep.hidden && I.configStep.valid, I.validityWatcher = I.$scope.$watch("$ctrl.builderForm.$valid", function(e, t) {
                    I.configStep.valid = e, !0 === I.ctrl.noProjectsCantCreate && (I.configStep.valid = !1);
                });
            }, this.showBind = function() {
                I.clearValidityWatcher(), I.ctrl.nextTitle = "Create", I.reviewStep.allowed = !0;
            }, this.showResults = function() {
                I.clearValidityWatcher(), I.ctrl.nextTitle = "Close", I.ctrl.wizardDone = !0, I.ctrl.currentStep = "Results", 
                I.createApp();
            }, this.onProjectUpdate = function() {
                if (!I.instancesSupported || I.isNewProject()) I.ctrl.serviceInstances = [], I.updateBindability(); else if (I.ctrl.showPodPresets) {
                    I.ctrl.updating = !0;
                    var e = I.APIService.getPreferredVersion("serviceinstances");
                    I.DataService.list(e, {
                        namespace: I.ctrl.selectedProject.metadata.name
                    }, null, {
                        errorNotification: !1
                    }).then(function(e) {
                        I.ctrl.serviceInstances = a.filter(a.toArray(e.by("metadata.name")), I.isServiceBindable), 
                        I.sortServiceInstances(), I.ctrl.updating = !1, I.updateBindability();
                    }, function(e) {
                        I.Logger.warn("Failed to list instances in namespace " + I.ctrl.selectedProject.metadata.name, e), 
                        I.ctrl.updating = !1, I.ctrl.serviceInstances = [], I.updateBindability();
                    });
                }
            }, this.isServiceBindable = function(e) {
                var t, r = I.BindingService.getServiceClassForInstance(e, I.ctrl.serviceClasses), n = a.get(e, "spec.clusterServicePlanRef.name");
                return n && (t = I.ctrl.servicePlans[n]), I.BindingService.isServiceBindable(e, r, t);
            }, this.$scope = n, this.$filter = e, this.$location = t, this.$q = r, this.BuilderAppService = o, 
            this.ProjectsService = C, this.DataService = c, this.APIService = i, this.BindingService = s, 
            this.Logger = g, this.VersionsService = A, this.ctrl.serviceToBind = null, this.ctrl.showPodPresets = a.get(l, [ "ENABLE_TECH_PREVIEW_FEATURE", "pod_presets" ], !1), 
            this.gitRef = "", this.contextDir = "";
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.selectedProject = this.ctrl.addToProject, this.infoStep = {
                label: "Information",
                id: "info",
                view: "create-from-builder/create-from-builder-info.html",
                valid: !0,
                allowed: !0,
                hidden: !1,
                allowClickNav: !0,
                onShow: this.showInfo
            }, this.configStep = {
                label: "Configuration",
                id: "configure",
                view: "create-from-builder/create-from-builder-configure.html",
                valid: !1,
                allowed: !0,
                hidden: !1,
                allowClickNav: !0,
                onShow: this.showConfig
            }, this.bindStep = {
                label: "Binding",
                id: "bind",
                view: "create-from-builder/create-from-builder-bind.html",
                valid: !0,
                allowed: !1,
                hidden: !this.ctrl.showPodPresets,
                allowClickNav: !0,
                onShow: this.showBind
            }, this.reviewStep = {
                label: "Results",
                id: "results",
                view: "create-from-builder/create-from-builder-results.html",
                valid: !0,
                allowed: !1,
                hidden: !1,
                prevEnabled: !1,
                allowClickNav: !1,
                onShow: this.showResults
            }, this.ctrl.steps = [ this.infoStep, this.configStep, this.bindStep, this.reviewStep ], 
            this.ctrl.currentStep = "Information", this.ctrl.versions = this.getVersions(), 
            this.ctrl.istag = a.head(this.ctrl.versions), this.ctrl.nameMaxLength = 24, this.ctrl.namePattern = /^[a-z]([-a-z0-9]*[a-z0-9])?$/, 
            this.ctrl.repositoryPattern = /^[a-z][a-z0-9+.-@]*:(\/\/)?[0-9a-z_-]+/, this.ctrl.wizardDone = !1, 
            this.ctrl.serviceToBind = null, this.ctrl.updating = !1, this.ctrl.noProjectsCantCreate = !1;
            var t = this.$filter("annotation");
            this.ctrl.documentationUrl = t(this.ctrl.imageStream.resource, "openshift.io/documentation-url"), 
            this.ctrl.supportUrl = t(this.ctrl.imageStream.resource, "openshift.io/support-url"), 
            this.ctrl.serviceInstances = [], this.selectedProjectWatch = this.$scope.$watch(function() {
                return e.ctrl.selectedProject;
            }, this.onProjectUpdate), this.$scope.$watch("$ctrl.selectedProject.metadata.name", function() {
                e.ctrl.projectNameTaken = !1;
            }), this.ctrl.showPodPresets ? (this.getServiceClassesAndPlans(), this.instancesSupported = !!this.APIService.apiInfo(this.APIService.getPreferredVersion("serviceinstances"))) : this.instancesSupported = !1, 
            this.noProjectsCantCreateWatch = this.$scope.$on("no-projects-cannot-create", function() {
                e.ctrl.noProjectsCantCreate = !0;
            });
        }, e.prototype.closePanel = function() {
            n.isFunction(this.ctrl.handleClose) && this.ctrl.handleClose();
        }, e.prototype.$onDestroy = function() {
            this.DataService.unwatchAll(this.watches), this.selectedProjectWatch(), this.noProjectsCantCreateWatch(), 
            this.clearValidityWatcher();
        }, e.prototype.fillSampleRepo = function() {
            if (this.ctrl.repository = a.get(this, "ctrl.istag.annotations.sampleRepo"), this.gitRef = a.get(this, "ctrl.istag.annotations.sampleRef", ""), 
            this.contextDir = a.get(this, "ctrl.istag.annotations.sampleContextDir", ""), !this.ctrl.name && this.ctrl.repository) {
                var e = this.ctrl.repository.substr(this.ctrl.repository.lastIndexOf("/") + 1);
                e = e.replace(/\.git$/, ""), e = a.truncate(e, this.ctrl.nameMaxLength), e = a.kebabCase(e), 
                this.ctrl.namePattern.test(e) && (this.ctrl.name = e);
            }
        }, e.prototype.onRepositoryChanged = function() {
            this.gitRef = "", this.contextDir = "";
        }, e.prototype.navigateToAdvancedForm = function() {
            var e = "project/{project}/create/fromimage?imageStream={imageStream}&imageTag={imageTag}&namespace={namespace}&displayName={displayName}&name={name}&sourceURI={sourceURI}&sourceRef={sourceRef}&contextDir={contextDir}&advanced=true", t = i.expand(e, {
                project: this.ctrl.selectedProject.metadata.name,
                imageStream: this.ctrl.imageStream.resource.metadata.name,
                imageTag: this.ctrl.istag.name,
                namespace: this.ctrl.imageStream.resource.metadata.namespace,
                displayName: this.ctrl.imageStream.name,
                name: this.ctrl.name || "",
                sourceURI: this.ctrl.repository || "",
                sourceRef: this.gitRef || "",
                contextDir: this.contextDir || ""
            }).toString();
            this.$location.url(t), this.closePanel();
        }, e.prototype.getTagReference = function(e) {
            if (!e.from || "ImageStreamTag" !== e.from.kind) return null;
            var t = a.get(this, "ctrl.imageStream.resource.metadata.namespace");
            if (e.from.namespace && e.from.namespace !== t) return null;
            if (-1 === e.from.name.indexOf(":")) return e.from.name;
            var r = a.get(this, "ctrl.imageStream.resource.metadata.name"), n = e.from.name.split(":");
            return n[0] !== r ? null : n[1];
        }, e.prototype.getVersions = function() {
            var e = this;
            this.ctrl.referencedBy = {};
            var t = {}, r = {}, n = a.get(this, "ctrl.imageStream.resource.spec.tags", []);
            a.each(n, function(n) {
                var i = e.getTagReference(n);
                if (i) return t[n.name] = i, e.ctrl.referencedBy[i] = e.ctrl.referencedBy[i] || [], 
                void e.ctrl.referencedBy[i].push(n.name);
                var s = a.get(n, "annotations.tags", ""), o = s.split(/\s*,\s*/);
                a.includes(o, "builder") && !a.includes(o, "hidden") && (r[n.name] = n);
            });
            var i = [], s = a.get(this, "ctrl.imageStream.resource.status.tags", []);
            return a.each(s, function(e) {
                var t = r[e.tag];
                t && i.push(t);
            }), i.sort(function(t, r) {
                return e.VersionsService.rcompare(t.name, r.name);
            }), i;
        }, e.prototype.getImageStreamTag = function() {
            var e = this.APIService.getPreferredVersion("imagestreamtags"), t = this.ctrl.imageStream.resource.metadata.name + ":" + this.ctrl.istag.name, r = this.ctrl.imageStream.resource.metadata.namespace;
            return this.DataService.get(e, t, {
                namespace: r
            });
        }, e.prototype.sortServiceInstances = function() {
            if (this.ctrl.serviceInstances) {
                var e = a.toArray(this.ctrl.serviceInstances), t = this.$filter("statusCondition");
                e.sort(function(e, r) {
                    var n = "True" === a.get(t(e, "Ready"), "status");
                    if (n === ("True" === a.get(t(r, "Ready"), "status"))) {
                        var i = a.get(e, "metadata.creationTimestamp");
                        return a.get(r, "metadata.creationTimestamp").localeCompare(i);
                    }
                    return n ? -1 : 1;
                }), this.ctrl.serviceInstances = e;
            }
        }, e.prototype.updateBindability = function() {
            !this.ctrl.wizardDone && this.ctrl.showPodPresets && (this.bindStep.hidden = a.size(this.ctrl.serviceInstances) < 1, 
            this.ctrl.serviceToBind = null, this.bindStep.hidden ? this.ctrl.nextTitle = "Create" : this.ctrl.nextTitle = "Next >");
        }, e.prototype.isNewProject = function() {
            return !a.has(this.ctrl.selectedProject, "metadata.uid");
        }, e.prototype.createApp = function() {
            var e = this;
            this.createProjectIfNecessary().then(function(t) {
                e.ctrl.selectedProject = t, e.getImageStreamTag().then(function(t) {
                    var r = e.BuilderAppService.makeAPIObjects({
                        name: e.ctrl.name,
                        repository: e.ctrl.repository,
                        gitRef: e.gitRef,
                        contextDir: e.contextDir,
                        namespace: e.ctrl.selectedProject.metadata.name,
                        imageStreamTag: t
                    });
                    e.createAPIObjects(r), e.ctrl.serviceToBind && e.bindService(a.find(r, {
                        kind: "DeploymentConfig"
                    }));
                }, function(t) {
                    e.ctrl.error = t;
                });
            }, function(t) {
                "AlreadyExists" === t.data.reason ? (e.ctrl.projectNameTaken = !0, e.ctrl.wizardDone = !1, 
                e.ctrl.currentStep = "Configuration") : e.ctrl.error = t;
            });
        }, e.prototype.createProjectIfNecessary = function() {
            if (!this.isNewProject()) return this.$q.when(this.ctrl.selectedProject);
            var e = this.ctrl.selectedProject.metadata.name, t = this.ctrl.selectedProject.metadata.annotations["new-display-name"], r = this.$filter("description")(this.ctrl.selectedProject);
            return this.ProjectsService.create(e, t, r);
        }, e.prototype.createAPIObjects = function(e) {
            var t = this;
            this.DataService.batch(e, {
                namespace: this.ctrl.selectedProject.metadata.name
            }).then(function(e) {
                e.failure.length ? t.ctrl.error = e : t.ctrl.success = !0;
            }, function(e) {
                t.ctrl.error = e;
            });
        }, e.prototype.bindService = function(e) {
            var t = this;
            this.ctrl.bindError = !1;
            var r = {
                namespace: a.get(this.ctrl.selectedProject, "metadata.name")
            }, n = this.BindingService.getServiceClassForInstance(this.ctrl.serviceToBind, this.ctrl.serviceClasses);
            this.BindingService.bindService(this.ctrl.serviceToBind, e, n).then(function(e) {
                t.ctrl.binding = e, t.watches.push(t.DataService.watchObject(t.BindingService.bindingResource, a.get(t.ctrl.binding, "metadata.name"), r, function(e) {
                    t.ctrl.binding = e;
                }));
            }, function(e) {
                t.ctrl.bindComplete = !0, t.ctrl.bindError = e;
            });
        }, e.prototype.getServiceClassesAndPlans = function() {
            var e = this, t = this.APIService.getPreferredVersion("clusterserviceclasses"), r = this.APIService.getPreferredVersion("clusterserviceplans");
            if (this.APIService.apiInfo(t) && this.APIService.apiInfo(r)) {
                this.ctrl.updating = !0;
                var n = [];
                n.push(this.DataService.list(t, {}).then(function(t) {
                    e.ctrl.serviceClasses = t.by("metadata.name");
                })), n.push(this.DataService.list(r, {}).then(function(t) {
                    e.ctrl.servicePlans = t.by("metadata.name");
                })), this.$q.all(n).finally(function() {
                    e.ctrl.updating = !1;
                });
            }
        }, e;
    }();
    s.$inject = [ "$filter", "$location", "$q", "$scope", "APIService", "BindingService", "BuilderAppService", "Constants", "DataService", "Logger", "ProjectsService", "VersionsService" ], 
    t.CreateFromBuilderController = s;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e(e, t, r) {
            var n = this;
            this.ctrl = this, this.closeOrderingPanel = function() {
                n.RecentlyViewed.addItem(n.ctrl.selectedItem.resource.metadata.uid), n.ctrl.orderingPanelVisible = !1;
            }, this.$scope = e, this.Catalog = t, this.RecentlyViewed = r, this.plansByServiceClassName = {};
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.searchText = "", this.ctrl.orderingPanelVisible = !1, this.Catalog.getServicePlans().then(function(t) {
                t && (t = n.reject(t.by("metadata.name"), {
                    status: {
                        removedFromBrokerCatalog: !0
                    }
                }), e.plansByServiceClassName = e.Catalog.groupPlansByServiceClassName(t));
            }), this.$scope.$on("open-overlay-panel", function(t, r) {
                if (e.ctrl.servicePlansForItem = null, "Template" === r.kind) {
                    var n = e.ctrl.onTemplateSelected();
                    return void (n && n(r.resource));
                }
                "ClusterServiceClass" === r.kind && (e.ctrl.servicePlansForItem = e.plansByServiceClassName[r.resource.metadata.name]), 
                e.ctrl.selectedItem = r, e.ctrl.orderingPanelVisible = !0;
            });
        }, e.prototype.$onDestroy = function() {
            this.ctrl.orderingPanelVisible && this.closeOrderingPanel();
        }, e;
    }();
    a.$inject = [ "$scope", "Catalog", "RecentlyViewedServiceItems" ], t.LandingPageController = a;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, n, i, s, o, l, c, g) {
            var C = this;
            this.ctrl = this, this.watches = [], this.clearValidityWatcher = function() {
                C.validityWatcher && (C.validityWatcher(), C.validityWatcher = void 0), C.ctrl.reviewStep.allowed = !1;
            }, this.showInfo = function() {
                C.clearValidityWatcher(), C.ctrl.configPageShown = !1, C.ctrl.nextTitle = "Next >";
            }, this.showPlan = function() {
                C.clearValidityWatcher(), C.ctrl.configPageShown = !1, C.ctrl.nextTitle = "Next >";
            }, this.showConfig = function() {
                C.ctrl.currentStep = "Configuration", C.clearValidityWatcher(), C.ctrl.configPageShown = !0, 
                C.reviewStep.allowed = C.bindStep.hidden && C.configStep.valid, C.updateBindability(), 
                C.validityWatcher = C.$scope.$watch("$ctrl.forms.orderConfigureForm.$valid", function(e, t) {
                    C.configStep.valid = e && !C.ctrl.noProjectsCantCreate, C.bindStep.allowed = C.configStep.valid, 
                    C.reviewStep.allowed = C.bindStep.hidden && C.configStep.valid;
                });
            }, this.showBind = function() {
                C.clearValidityWatcher(), C.ctrl.configPageShown = !1, C.ctrl.nextTitle = C.bindParametersStep.hidden ? "Create" : "Next >", 
                C.reviewStep.allowed = C.bindParametersStep.hidden && C.bindStep.valid, C.isNewProject() ? C.ctrl.projectDisplayName = C.ctrl.selectedProject.metadata.annotations["new-display-name"] || C.ctrl.selectedProject.metadata.name : C.ctrl.projectDisplayName = C.$filter("displayName")(C.ctrl.selectedProject), 
                C.validityWatcher = C.$scope.$watch("$ctrl.forms.bindForm.$valid", function(e, t) {
                    C.bindStep.valid = e, C.bindParametersStep.allowed = e, C.reviewStep.allowed = C.bindParametersStep.hidden && C.bindStep.valid;
                });
            }, this.showBindParameters = function() {
                C.clearValidityWatcher(), C.ctrl.nextTitle = "Create", C.validityWatcher = C.$scope.$watch("$ctrl.forms.bindParametersForm.$valid", function(e, t) {
                    C.bindParametersStep.valid = e, C.reviewStep.allowed = C.bindParametersStep.valid;
                });
            }, this.showResults = function() {
                C.ctrl.currentStep = "Results", C.clearValidityWatcher(), C.ctrl.configPageShown = !1, 
                C.ctrl.nextTitle = "Close", C.ctrl.wizardDone = !0, C.provisionService();
            }, this.selectPlan = function(e) {
                C.ctrl.selectedPlan = e, C.ctrl.parameterData = {}, C.updateParameterSchema(e), 
                C.updateBindability();
            }, this.provisionService = function() {
                if (C.ctrl.inProgress = !0, C.ctrl.orderComplete = !1, C.ctrl.error = !1, C.isNewProject()) {
                    var e = C.ctrl.selectedProject.metadata.name, t = C.ctrl.selectedProject.metadata.annotations["new-display-name"], r = C.$filter("description")(C.ctrl.selectedProject);
                    C.ProjectsService.create(e, t, r).then(function(e) {
                        C.ctrl.selectedProject = e, C.ctrl.projectDisplayName = C.$filter("displayName")(e), 
                        C.createService();
                    }, function(e) {
                        "AlreadyExists" === e.data.reason ? (C.ctrl.projectNameTaken = !0, C.ctrl.wizardDone = !1, 
                        C.ctrl.currentStep = "Configuration") : C.ctrl.error = e;
                    });
                } else C.ctrl.projectDisplayName = C.$filter("displayName")(C.ctrl.selectedProject), 
                C.createService();
            }, this.onProjectUpdate = function() {
                if (C.isNewProject()) C.ctrl.applications = [], C.ctrl.updating = !1, C.updateBindability(); else if (C.ctrl.showPodPresets) {
                    C.ctrl.updating = !0, C.ctrl.bindType = "none", C.ctrl.serviceToBind = C.ctrl.serviceClass;
                    var e = {
                        namespace: a.get(C.ctrl.selectedProject, "metadata.name")
                    };
                    C.ApplicationsService.getApplications(e).then(function(e) {
                        C.ctrl.applications = e, C.ctrl.updating = !1, C.updateBindability();
                    });
                }
            }, this.watchResults = function(e, t, r) {
                C.watches.push(C.DataService.watchObject(e, t.metadata.name, r, function(e, t) {
                    var r = a.get(e, "status.conditions"), n = a.find(r, {
                        type: "Ready"
                    });
                    C.ctrl.orderComplete = n && "True" === n.status, C.ctrl.error = a.find(r, {
                        type: "Failed",
                        status: "True"
                    });
                }));
            }, this.$scope = e, this.$filter = t, this.APIService = r, this.ApplicationsService = n, 
            this.ProjectsService = i, this.DataService = s, this.BindingService = o, this.Logger = l, 
            this.ctrl.showPodPresets = a.get(c, [ "ENABLE_TECH_PREVIEW_FEATURE", "pod_presets" ], !1), 
            this.DNS1123_SUBDOMAIN_VALIDATION = g;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.selectedProject = this.ctrl.addToProject, this.ctrl.iconClass = this.ctrl.serviceClass.iconClass || "fa fa-clone", 
            this.ctrl.imageUrl = this.ctrl.serviceClass.imageUrl, this.ctrl.serviceName = this.ctrl.serviceClass.name, 
            this.ctrl.description = this.ctrl.serviceClass.description, this.ctrl.longDescription = this.ctrl.serviceClass.longDescription, 
            this.ctrl.docUrl = a.get(this.ctrl.serviceClass, "resource.spec.externalMetadata.documentationUrl"), 
            this.ctrl.supportUrl = a.get(this.ctrl.serviceClass, "resource.spec.externalMetadata.supportUrl");
            var t = a.get(this.ctrl.serviceClass, "resource.spec.externalMetadata.dependencies");
            a.isArray(t) && (this.ctrl.imageDependencies = a.uniq(a.filter(t, a.isString))), 
            this.ctrl.noProjectsCantCreate = !1, this.ctrl.applications = [], this.ctrl.parameterData = {}, 
            this.ctrl.bindParameterData = {}, this.ctrl.forms = {}, this.ctrl.appToBind = null, 
            this.ctrl.configStepValid = !0, this.ctrl.multipleServicePlans = a.size(this.ctrl.servicePlans) > 1, 
            this.infoStep = {
                id: "info",
                label: "Information",
                view: "order-service/order-service-info.html",
                valid: !0,
                allowed: !0,
                hidden: !1,
                allowClickNav: !0,
                onShow: this.showInfo
            }, this.planStep = {
                id: "plans",
                label: "Plan",
                view: "order-service/order-service-plans.html",
                hidden: !this.ctrl.multipleServicePlans,
                allowed: !0,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showPlan
            }, this.configStep = {
                label: "Configuration",
                id: "configure",
                view: "order-service/order-service-configure.html",
                hidden: !1,
                allowed: !0,
                valid: !1,
                allowClickNav: !0,
                onShow: this.showConfig
            }, this.bindStep = {
                label: "Binding",
                id: "bind",
                view: "order-service/order-service-bind.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showBind
            }, this.bindParametersStep = {
                label: "Parameters",
                id: "bind-parameters",
                view: "order-service/order-service-bind-parameters.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showBindParameters
            }, this.reviewStep = {
                label: "Results",
                id: "results",
                view: "order-service/order-service-results.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                prevEnabled: !1,
                allowClickNav: !1,
                onShow: this.showResults
            }, this.ctrl.steps = [ this.infoStep, this.planStep, this.configStep, this.bindStep, this.bindParametersStep, this.reviewStep ], 
            this.ctrl.currentStep = "Information", this.ctrl.projectNameTaken = !1, this.ctrl.wizardDone = !1, 
            this.ctrl.bindType = "none", this.ctrl.orderedPlans = a.orderBy(this.ctrl.servicePlans, [ "spec.externalMetadata.displayName", "metadata.name" ]), 
            this.selectPlan(a.head(this.ctrl.orderedPlans)), this.ctrl.addToProject || (this.ctrl.updating = !0, 
            this.selectedProjectWatch = this.$scope.$watch(function() {
                return e.ctrl.selectedProject;
            }, this.onProjectUpdate)), this.$scope.$watch("$ctrl.selectedProject.metadata.name", function() {
                e.ctrl.projectNameTaken = !1;
            }), this.bindTypeWatch = this.$scope.$watch("$ctrl.bindType", function(t, r) {
                t !== r && (e.updateBindParametersStepVisibility(), e.ctrl.nextTitle = e.bindParametersStep.hidden ? "Create" : "Next >", 
                e.reviewStep.allowed = e.bindParametersStep.hidden && e.bindStep.valid);
            }), this.noProjectsCantCreateWatch = this.$scope.$on("no-projects-cannot-create", function() {
                e.ctrl.noProjectsCantCreate = !0;
            });
        }, e.prototype.createService = function() {
            var e = this, t = this.getParameters(), r = a.isEmpty(t) ? null : this.BindingService.generateSecretName(this.getClusterServiceClassExternalName() + "-parameters"), n = this.makeServiceInstance(r), i = this.APIService.getPreferredVersion("serviceinstances"), s = {
                namespace: this.ctrl.selectedProject.metadata.name
            };
            this.DataService.create(i, null, n, s).then(function(n) {
                if (e.ctrl.orderInProgress = !0, e.watchResults(i, n, s), e.ctrl.serviceInstance = n, 
                r) {
                    var o = e.BindingService.makeParametersSecret(r, t, n), l = e.APIService.getPreferredVersion("secrets");
                    e.DataService.create(l, null, o, s).then(a.noop, function(t) {
                        e.ctrl.error = a.get(t, "data");
                    });
                }
                "none" !== e.ctrl.bindType && e.bindService();
            }, function(t) {
                e.ctrl.error = a.get(t, "data");
            });
        }, e.prototype.bindService = function() {
            var e = this;
            this.ctrl.bindError = !1;
            var t = {
                namespace: a.get(this.ctrl.selectedProject, "metadata.name")
            }, r = "application" === this.ctrl.bindType ? this.ctrl.appToBind : void 0;
            this.BindingService.bindService(this.ctrl.serviceInstance, r, this.ctrl.serviceClass.resource, this.ctrl.bindParameterData).then(function(r) {
                e.ctrl.binding = r, e.watches.push(e.DataService.watchObject(e.BindingService.bindingResource, a.get(e.ctrl.binding, "metadata.name"), t, function(t) {
                    e.ctrl.binding = t;
                }));
            }, function(t) {
                e.ctrl.bindError = t;
            });
        }, e.prototype.$onDestroy = function() {
            this.DataService.unwatchAll(this.watches), this.selectedProjectWatch && this.selectedProjectWatch(), 
            this.noProjectsCantCreateWatch(), this.bindTypeWatch(), this.clearValidityWatcher();
        }, e.prototype.closePanel = function() {
            n.isFunction(this.ctrl.handleClose) && this.ctrl.handleClose();
        }, e.prototype.updateBindability = function() {
            if (!this.ctrl.wizardDone) {
                var e = a.get(this.ctrl.selectedPlan, "spec.bindable");
                this.bindStep.hidden = !0 !== e && (!1 === e || !a.get(this.ctrl.serviceClass, "resource.spec.bindable")), 
                this.updateBindParametersStepVisibility(), this.ctrl.configPageShown && (this.reviewStep.allowed = this.bindStep.hidden, 
                this.bindStep.hidden ? this.ctrl.nextTitle = "Create" : this.ctrl.nextTitle = "Next >");
            }
        }, e.prototype.updateBindParametersStepVisibility = function() {
            this.bindParametersStep.hidden = this.bindStep.hidden || "none" === this.ctrl.bindType || !a.has(this.ctrl, "bindParameterSchema.properties"), 
            this.bindParametersStep.allowed = this.bindStep.valid;
        }, e.prototype.updateParameterSchema = function(e) {
            this.ctrl.parameterSchema = a.get(e, "spec.instanceCreateParameterSchema"), this.ctrl.parameterFormDefinition = a.get(this, "ctrl.selectedPlan.spec.externalMetadata.schemas.service_instance.create.openshift_form_definition"), 
            this.ctrl.bindParameterSchema = a.get(e, "spec.serviceBindingCreateParameterSchema"), 
            this.ctrl.bindParameterFormDefinition = a.get(this, "ctrl.selectedPlan.spec.externalMetadata.schemas.service_binding.create.openshift_form_definition");
        }, e.prototype.getParameters = function() {
            return a.omitBy(this.ctrl.parameterData, function(e) {
                return "" === e;
            });
        }, e.prototype.getClusterServiceClassExternalName = function() {
            return a.get(this, "ctrl.serviceClass.resource.spec.externalName");
        }, e.prototype.makeServiceInstance = function(e) {
            var t = this.getClusterServiceClassExternalName(), r = {
                kind: "ServiceInstance",
                apiVersion: "servicecatalog.k8s.io/v1beta1",
                metadata: {
                    namespace: this.ctrl.selectedProject.metadata.name,
                    generateName: t + "-"
                },
                spec: {
                    clusterServiceClassExternalName: t,
                    clusterServicePlanExternalName: this.ctrl.selectedPlan.spec.externalName
                }
            };
            return e && (r.spec.parametersFrom = [ {
                secretKeyRef: {
                    name: e,
                    key: "parameters"
                }
            } ]), r;
        }, e.prototype.isNewProject = function() {
            return !this.ctrl.selectedProject || !a.has(this.ctrl.selectedProject, "metadata.uid");
        }, e;
    }();
    i.$inject = [ "$scope", "$filter", "APIService", "ApplicationsService", "ProjectsService", "DataService", "BindingService", "Logger", "Constants", "DNS1123_SUBDOMAIN_VALIDATION" ], 
    t.OrderServiceController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(2), i = function() {
        function e(e, t) {
            var r = this;
            this.ctrl = this, this.closePanel = function() {
                n.isFunction(r.ctrl.handleClose) && r.ctrl.handleClose();
            }, this.showDialog = function() {
                r.ctrl.shown = !0, a("body").addClass("overlay-open"), r.$document.on("keydown", r.closeOnEsc);
            }, this.hideDialog = function() {
                r.ctrl.shown = !1, a("body").removeClass("overlay-open"), r.$document.off("keydown", r.closeOnEsc);
            }, this.closeOnEsc = function(e) {
                27 === e.which && (e.isDefaultPrevented() || (e.preventDefault(), r.$scope.$evalAsync(function() {
                    r.closePanel();
                })));
            }, this.$document = e, this.$scope = t, this.ctrl.shown = !1;
        }
        return e.prototype.$postLink = function() {
            this.ctrl.showPanel && this.showDialog();
        }, e.prototype.$onChanges = function(e) {
            e.showPanel && (this.ctrl.showPanel ? this.showDialog() : this.hideDialog());
        }, e.prototype.$onDestroy = function() {
            a("body").removeClass("overlay-open");
        }, e;
    }();
    i.$inject = [ "$document", "$scope" ], t.OverlayPanelController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(t, r, i, s, o, l, c, g, C, A, I) {
            var d = this;
            this.ctrl = this, this.newProjectPanelShown = !1, this.editProjectPanelShown = !1, 
            this.watches = [], this.maxDisplayProjects = 5, this.watchingProjects = !1, this.init = function() {
                d.ProjectsService.list().then(function(t) {
                    d.onProjectsUpdate(t), d.ctrl.isProjectListIncomplete = d.ProjectsService.isProjectListIncomplete(), 
                    !d.ctrl.isProjectListIncomplete && d.ctrl.totalProjects <= e.MAX_PROJETS_TO_WATCH && (d.watches.push(d.ProjectsService.watch(d.$scope, d.onProjectsUpdate)), 
                    d.watchingProjects = !0);
                }, function() {
                    d.ctrl.isProjectListIncomplete = !0;
                }), d.ctrl.resourceLinks = a.clone(d.Constants.CATALOG_HELP_RESOURCES.links), a.forEach(d.ctrl.resourceLinks, function(e) {
                    n.isDefined(e.help) && (e.href = d.Constants.HELP_BASE_URL + (e.help ? d.Constants.HELP[e.help] : ""));
                }), d.$rootScope.$on("recently-viewed-updated", function() {
                    d.ctrl.recentlyViewedItems = d.getRecentlyViewedItems();
                });
            }, this.onProjectsUpdate = function(e) {
                var t = a.toArray(e.by("metadata.name"));
                d.ctrl.projects = d.RecentlyViewedProjectsService.orderByMostRecentlyViewed(t), 
                d.ctrl.totalProjects = d.ctrl.projects.length, d.ctrl.projects = a.take(d.ctrl.projects, d.maxDisplayProjects), 
                d.ctrl.loading = !1, d.ctrl.showGetStarted = !d.ctrl.projects || d.ctrl.projects.length < 2;
            }, this.goToProject = function(e) {
                var t = d.$filter("projectUrl")(e, d.ctrl.baseProjectUrl);
                d.$window.location.href = t;
            }, this.closeNewProjectPanel = function() {
                d.ctrl.newProjectPanelShown = !1;
            }, this.onNewProject = function(e) {
                d.ctrl.newProjectPanelShown = !1, d.watchingProjects || d.ProjectsService.list().then(d.onProjectsUpdate);
            }, this.onViewMemebership = function(e) {
                var t = d.ctrl.viewEditMembership();
                t && t(e);
            }, this.editProject = function(e) {
                d.ctrl.edittingProject = e, d.ctrl.editProjectPanelShown = !0;
            }, this.closeEditProjectPanel = function() {
                d.ctrl.editProjectPanelShown = !1;
            }, this.onEditProject = function(e) {
                d.ctrl.editProjectPanelShown = !1, d.watchingProjects || d.ProjectsService.list().then(d.onProjectsUpdate);
            }, this.onDeleteProject = function() {
                d.watchingProjects || d.ProjectsService.list().then(d.onProjectsUpdate);
            }, this.$filter = t, this.$rootScope = r, this.$scope = i, this.$window = s, this.AuthService = o, 
            this.Constants = l, this.DataService = c, this.Logger = g, this.ProjectsService = C, 
            this.RecentlyViewedProjectsService = A, this.RecentlyViewedItems = I;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.loading = !0, this.AuthService.withUser().then(function(t) {
                e.ctrl.user = t;
            }), this.ProjectsService.canCreate().then(function() {
                e.ctrl.canCreate = !0;
            }, function(t) {
                e.ctrl.canCreate = !1, e.ctrl.loading = !1;
                var r = t.data || {};
                if (403 !== t.status) {
                    var n = "Failed to determine create project permission";
                    return 0 !== t.status && (n += " (" + t.status + ")"), void e.Logger.warn(n);
                }
                if (r.details) {
                    var i = [];
                    a.forEach(r.details.causes || [], function(e) {
                        e.message && i.push(e.message);
                    }), i.length > 0 && (e.ctrl.newProjectMessage = i.join("\n"));
                }
            }).finally(function() {
                e.init();
            });
        }, e.prototype.$onDestroy = function() {
            this.DataService.unwatchAll(this.watches);
        }, e.prototype.$onChanges = function(e) {
            e.catalogItems && this.ctrl.catalogItems && (this.allItems = a.keyBy(this.ctrl.catalogItems, "resource.metadata.uid"), 
            this.ctrl.recentlyViewedItems = this.getRecentlyViewedItems());
        }, e.prototype.openNewProjectPanel = function(e) {
            this.ctrl.newProjectPanelShown = !0, this.ctrl.modalPopupElement = e.currentTarget;
        }, e.prototype.handleGettingStartedClick = function() {
            var e = this.ctrl.startTour();
            e && e();
        }, e.prototype.handleProjectClick = function(e) {
            var t = this.ctrl.projectSelect();
            t && t(e);
        }, e.prototype.orderService = function(e) {
            this.$scope.$emit("open-overlay-panel", e);
        }, e.prototype.showAllProjects = function() {
            var e = this.ctrl.showProjects();
            e && e();
        }, e.prototype.getRecentlyViewedItems = function() {
            var e = this;
            if (this.allItems) {
                var t = this.RecentlyViewedItems.getItems(), r = a.map(t, function(t) {
                    return e.allItems[t];
                });
                return r = a.reject(r, function(e) {
                    return !e;
                });
            }
        }, e;
    }();
    i.$inject = [ "$filter", "$rootScope", "$scope", "$window", "AuthService", "Constants", "DataService", "Logger", "ProjectsService", "RecentlyViewedProjectsService", "RecentlyViewedServiceItems" ], 
    i.MAX_PROJETS_TO_WATCH = 250, t.ProjectsSummaryController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, n) {
            var a = this;
            this.ctrl = this, this.onWindowResize = function() {
                a.$scope.$evalAsync(function() {
                    a.updateListExpandVisibility();
                });
            }, this.$scope = e, this.$window = t, this.$element = r, this.BREAKPOINTS = n, this.ctrl.sassListExpanded = !1, 
            this.ctrl.itemsOverflow = !1;
        }
        return e.prototype.$postLink = function() {
            this.debounceResize = a.debounce(this.onWindowResize, 50, {
                maxWait: 250
            }), n.element(this.$window).on("resize", this.debounceResize), this.updateListExpandVisibility();
        }, e.prototype.$onDestroy = function() {
            n.element(this.$window).off("resize", this.debounceResize);
        }, e.prototype.hasSaasOfferings = function() {
            return !a.isEmpty(this.ctrl.saasOfferings);
        }, e.prototype.$onChanges = function(e) {
            e.saasOfferings && !e.saasOfferings.isFirstChange() && (this.ctrl.saasOfferings = e.saasOfferings.currentValue, 
            this.updateListExpandVisibility());
        }, e.prototype.toggleListExpand = function() {
            this.ctrl.sassListExpanded = !this.ctrl.sassListExpanded;
        }, e.prototype.updateListExpandVisibility = function() {
            var e = this.$window.innerWidth, t = a.size(this.ctrl.saasOfferings);
            this.ctrl.itemsOverflow = t > 4 || t > 2 && e < this.BREAKPOINTS.screenLgMin;
        }, e;
    }();
    i.$inject = [ "$scope", "$window", "$element", "BREAKPOINTS" ], t.SaasListController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e() {
            this.ctrl = this;
        }
        return e.prototype.$onInit = function() {
            this.updatePlans();
        }, e.prototype.$onChanges = function(e) {
            (e.availablePlans && !e.availablePlans.isFirstChange() || e.selectedPlan && !e.selectedPlan.isFirstChange()) && this.updatePlans();
        }, e.prototype.updatePlans = function() {
            this.ctrl.plansAvailable = n.size(this.ctrl.availablePlans) > 0, this.ctrl.plansAvailable && (this.ctrl.selectedPlan || (this.ctrl.selectedPlan = this.ctrl.availablePlans[0]), 
            this.ctrl.planIndex = this.ctrl.availablePlans.indexOf(this.ctrl.selectedPlan));
        }, e;
    }();
    t.SelectPlanController = a;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(t, r, n, i, s, o, l, c) {
            var g = this;
            this.ctrl = this, this.getProjectChoices = function() {
                return g.ctrl.matchingProjects ? g.ctrl.matchingProjects : g.largeProjectList ? [] : g.projects;
            }, this.groupChoicesBy = function(e) {
                return g.largeProjectList ? "" : e.metadata.uid ? g.RecentlyViewedProjectsService.isRecentlyViewed(e.metadata.uid) ? "Recently Viewed" : "Other Projects" : "";
            }, this.refreshChoices = function(t) {
                var r;
                r = g.lastSearch && t.startsWith(g.lastSearch) ? g.lastResults : g.projects, g.lastSearch = t, 
                g.lastResults = g.filterProjects(t, r), g.ctrl.matchingProjects = a.take(g.lastResults, e.LARGE_PROJECT_LIST_SIZE);
            }, this.canIAddToProject = function() {
                var e = !0, t = a.get(g.ctrl.selectedProject, "metadata.name");
                g.isNewProject() || g.AuthorizationService.getProjectRules(t).then(function() {
                    e = g.AuthorizationService.canIAddToProject(t), g.ctrl.forms && g.ctrl.forms.selectProjectForm.selectProject.$setValidity("cannotAddToProject", e);
                }), g.ctrl.forms && g.ctrl.forms.selectProjectForm.selectProject.$setValidity("cannotAddToProject", e);
            }, this.$filter = t, this.$scope = r, this.AuthService = n, this.AuthorizationService = i, 
            this.KeywordService = s, this.Logger = o, this.ProjectsService = l, this.RecentlyViewedProjectsService = c, 
            this.largeProjectList = !1, this.lastSearch = "", this.lastResults = [];
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.noProjectsCantCreate = !1, this.ctrl.noProjectsConfig = {
                title: "No Projects Found",
                info: "Services cannot be provisioned without a project."
            }, void 0 === this.ctrl.showDivider && (this.ctrl.showDivider = !0), void 0 === this.ctrl.skipCanAddValidation && (this.ctrl.skipCanAddValidation = !1), 
            void 0 === this.ctrl.isRequired && (this.ctrl.isRequired = !0), this.ProjectsService.canCreate().then(function() {
                e.ctrl.canCreate = !0;
            }, function(t) {
                if (e.ctrl.canCreate = !1, 403 !== t.status) {
                    var r = "Failed to determine create project permission";
                    0 !== t.status && (r += " (" + t.status + ")"), e.Logger.warn(r);
                }
                var n = t.data || {};
                if (n.details) {
                    var i = [];
                    a.forEach(n.details.causes || [], function(e) {
                        e.message && i.push(e.message);
                    }), i.length > 0 && (e.ctrl.noProjectsCantCreateMessage = i.join("\n"));
                }
            }).finally(function() {
                e.listProjects();
            });
        }, e.prototype.$onChanges = function(e) {
            e.nameTaken && !e.nameTaken.isFirstChange() && this.ctrl.forms.createProjectForm.name.$setValidity("nameTaken", !this.ctrl.nameTaken), 
            e.availableProjects && !e.availableProjects.isFirstChange() && this.updateProjects(this.ctrl.availableProjects);
        }, e.prototype.onSelectProjectChange = function() {
            this.ctrl.skipCanAddValidation || this.canIAddToProject(), n.isFunction(this.ctrl.onProjectSelected) && this.ctrl.onProjectSelected(this.ctrl.selectedProject);
        }, e.prototype.onOpenClose = function(e) {
            e && a.isFunction(this.ctrl.onOpen) && this.ctrl.onOpen();
        }, e.prototype.onNewProjectNameChange = function() {
            this.ctrl.forms.createProjectForm.name.$setValidity("nameTaken", !0);
        }, e.prototype.isNewProject = function() {
            return this.projects && this.ctrl.selectedProject && !a.has(this.ctrl.selectedProject, "metadata.uid");
        }, e.prototype.canOnlyCreateProject = function() {
            return 1 === this.ctrl.numProjectChoices && !this.ctrl.hideCreateProject && this.ctrl.canCreate;
        }, e.prototype.filterProjects = function(e, t) {
            if (!e) return this.largeProjectList ? [] : t;
            var r = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]' ], n = this.KeywordService.generateKeywords(e);
            return this.KeywordService.filterForKeywords(t, r, n);
        }, e.prototype.updateProjects = function(t) {
            var r = this;
            if (this.largeProjectList = a.size(t) >= e.LARGE_PROJECT_LIST_SIZE, this.largeProjectList) return this.ctrl.placeholder = "Filter projects by name", 
            this.ctrl.searchEnabled = !0, this.ctrl.refreshDelay = 500, this.projects = t, void (this.ctrl.numProjectChoices = a.size(this.projects));
            this.ctrl.placeholder = "Select project";
            var n = {
                metadata: {
                    annotations: {
                        "openshift.io/display-name": "Create Project",
                        "new-display-name": ""
                    }
                }
            }, i = a.reject(t, "metadata.deletionTimestamp");
            this.projects = this.RecentlyViewedProjectsService.orderByMostRecentlyViewed(i), 
            this.ctrl.searchEnabled = !a.isEmpty(i), this.ctrl.refreshDelay = 0, this.ctrl.existingProjectNames = a.map(t, "metadata.name"), 
            this.preselectProject(), this.ctrl.canCreate && !this.ctrl.hideCreateProject ? (this.ctrl.placeholder = "Select or create project", 
            this.projects.unshift(n), 1 === a.size(this.projects) && (this.ctrl.selectedProject = n, 
            this.onSelectProjectChange())) : 0 === a.size(this.projects) && (this.ctrl.noProjectsCantCreate = !0, 
            this.AuthService.withUser().then(function(e) {
                r.ctrl.user = e;
            }), this.$scope.$emit("no-projects-cannot-create")), this.ctrl.numProjectChoices = a.size(this.projects);
        }, e.prototype.preselectProject = function() {
            this.ctrl.selectedProject || (1 === a.size(this.projects) ? this.ctrl.selectedProject = this.projects[0] : this.ctrl.preselectProjectName && (this.ctrl.selectedProject = a.find(this.projects, {
                metadata: {
                    name: this.ctrl.preselectProjectName
                }
            })), this.ctrl.selectedProject && this.onSelectProjectChange());
        }, e.prototype.listProjects = function() {
            var e = this;
            this.ctrl.availableProjects ? this.updateProjects(this.ctrl.availableProjects) : this.ProjectsService.list().then(function(t) {
                e.updateProjects(t.by("metadata.name"));
            });
        }, e;
    }();
    i.$inject = [ "$filter", "$scope", "AuthService", "AuthorizationService", "KeywordService", "Logger", "ProjectsService", "RecentlyViewedProjectsService" ], 
    i.LARGE_PROJECT_LIST_SIZE = 500, t.SelectProjectController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = r(2), i = function() {
        function e(e, t, r, a, i, s, o, l, c, g) {
            var C = this;
            this.ctrl = this, this.previousSubCategoryHeight = 0, this.resizeRetries = 0, this.serviceViewItemClicked = function(e, t) {
                C.$scope.$emit("open-overlay-panel", e);
            }, this.filterChange = function(e) {
                C.filterByCategory(C.ctrl.currentFilter, C.ctrl.currentSubFilter, !1), n.isEmpty(e) || n.each(e, function(e) {
                    switch (e.id) {
                      case "keyword":
                        C.ctrl.filteredItems = C.filterForKeywords(e.values[0], C.ctrl.filteredItems);
                        break;

                      case "vendors":
                        C.ctrl.filteredItems = C.filterForVendors(e.values, C.ctrl.filteredItems);
                    }
                }), C.ctrl.filterConfig.resultsCount = C.ctrl.filteredItems.length, C.ctrl.keywordFilterValue = null;
            }, this.clearAppliedFilters = function() {
                C.$scope.$broadcast("clear-filters");
            }, this.constants = e, this.catalog = t, this.keywordService = r, this.logger = a, 
            this.htmlService = i, this.element = s[0], this.$filter = o, this.$rootScope = l, 
            this.$scope = c, this.$timeout = g, this.ctrl.loaded = !1, this.ctrl.isEmpty = !1, 
            this.ctrl.mobileView = "categories", this.ctrl.filterConfig = {
                resultsLabel: "Items",
                appliedFilters: []
            }, this.ctrl.keywordFilterValue = null;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.debounceResize = n.debounce(function() {
                return e.resizeExpansion(!1);
            }, 50, {
                maxWait: 250
            }), a(window).on("resize.services", this.debounceResize), this.ctrl.currentFilter = this.ctrl.currentSubFilter = "all", 
            this.ctrl.sectionTitle = this.ctrl.sectionTitle || "Browse Catalog", this.removeFilterListener = this.$rootScope.$on("filter-catalog-items", function(t, r) {
                e.setKeywordFilter(r.searchText);
            }), this.ctrl.emptyFilterConfig = {
                title: "No results match.",
                info: "The active filters are hiding all catalog items.",
                helpLink: {
                    urlLabel: "Clear Filters",
                    urlAction: this.clearAppliedFilters
                }
            }, this.ctrl.noItemsConfig = {
                title: "No items.",
                info: "No catalog items have been loaded.",
                helpLink: {
                    urlLabel: "See Loading the Default Image Streams and Templates",
                    url: "https://docs.openshift.org/latest/install_config/imagestreams_templates.html"
                }
            }, this.ctrl.keywordFilter && this.setKeywordFilter(this.ctrl.keywordFilter);
        }, e.prototype.$onChanges = function(e) {
            e.catalogItems && e.catalogItems.currentValue && (this.ctrl.isEmpty = n.isEmpty(this.ctrl.catalogItems), 
            this.ctrl.isEmpty || (this.ctrl.categories = this.catalog.categorizeItems(this.ctrl.catalogItems), 
            this.ctrl.vendors = this.catalog.getVendors(this.ctrl.catalogItems), this.filterByCategory("all", "all", !0)), 
            this.ctrl.loaded = !0), e.keywordFilter && !e.keywordFilter.isFirstChange() && this.setKeywordFilter(this.ctrl.keywordFilter);
        }, e.prototype.$postLink = function() {
            this.scrollParent = this.getScrollParent(this.element), this.scrollParent && this.htmlService.isWindowAboveBreakpoint(this.htmlService.WINDOW_SIZE_SM) && (this.ctrl.viewStyle = {
                "min-height": "calc(100vh - " + this.scrollParent.getBoundingClientRect().top + "px)"
            });
        }, e.prototype.$onDestroy = function() {
            a(window).off("resize.services"), this.removeFilterListener();
        }, e.prototype.selectCategory = function(e) {
            if (this.ctrl.mobileView = "subcategories", this.clearAppliedFilters(), this.filterByCategory(e, null, !0), 
            this.scrollParent) {
                var t = a(this.scrollParent);
                t.scrollTop() !== this.element.offsetTop && t.animate({
                    scrollTop: this.element.offsetTop
                }, 200);
            }
        }, e.prototype.selectSubCategory = function(e) {
            this.ctrl.mobileView = "items", this.ctrl.currentSubFilter === e && "xxs" !== this.htmlService.getBreakpoint() && (e = null, 
            this.ctrl.mobileView = "subcategories"), this.clearAppliedFilters(), this.filterByCategory(this.ctrl.currentFilter, e, !1);
        }, e.prototype.getSubCategories = function(e) {
            var t = [];
            return this.ctrl.categories.map(function(r) {
                e === r.id && (t = t.concat(r.subCategories));
            }), t = n.filter(t, {
                hasItems: !0
            }), "all" === t[0].id && 2 === t.length && (t = n.drop(t, 1)), t;
        }, e.prototype.applyFilters = function(e) {
            this.filterChange(e.appliedFilters);
        }, e.prototype.filterByCategory = function(e, t, r) {
            var a, i;
            "all" === e || "other" === e ? t = "all" : (r && (this.ctrl.subCategories = this.getSubCategories(e)), 
            t = 1 === this.ctrl.subCategories.length ? this.ctrl.subCategories[0].id : t || null), 
            a = n.find(this.ctrl.categories, {
                id: e
            }), a ? t && (i = n.find(a.subCategories, {
                id: t
            }), i ? (this.ctrl.filteredItems = i.items, this.ctrl.filterConfig.totalCount = this.ctrl.filteredItems.length, 
            this.ctrl.filterConfig.resultsCount = this.ctrl.filterConfig.totalCount) : this.logger.error("Could not find subcategory '" + t + "' for category '" + e + "'")) : this.logger.error("Could not find category '" + e + "'"), 
            this.ctrl.currentFilter = e, this.ctrl.currentSubFilter = t, this.updateActiveCardStyles();
        }, e.prototype.setKeywordFilter = function(e) {
            this.ctrl.keywordFilterValue = e, this.ctrl.currentFilter = this.ctrl.currentSubFilter = "all", 
            this.ctrl.mobileView = "subcategories";
        }, e.prototype.filterForKeywords = function(e, t) {
            var r = this.keywordService.generateKeywords(e);
            return this.keywordService.filterForKeywords(t, [ "name", "tags" ], r);
        }, e.prototype.filterForVendors = function(e, t) {
            return n.filter(t, function(t) {
                return n.includes(e, t.vendor);
            });
        }, e.prototype.getScrollParent = function(e) {
            if (null === e || !(e instanceof Element)) return null;
            var t = window.getComputedStyle(e).overflowY;
            return "visible" !== t && "hidden" !== t ? e : this.getScrollParent(e.parentNode);
        }, e.prototype.resizeExpansion = function(t) {
            var r = this;
            if ("all" !== this.ctrl.currentFilter && "other" !== this.ctrl.currentFilter && this.ctrl.currentSubFilter && this.htmlService.isWindowAboveBreakpoint(this.htmlService.WINDOW_SIZE_XS)) {
                if (this.resizeRetries > e.MAX_RESIZE_RETRIES) return void (this.resizeRetries = 0);
                var n = a("#" + this.ctrl.currentSubFilter), i = n.find(".services-items"), s = i.outerHeight(!0);
                s || (this.resizeRetries++, setTimeout(function() {
                    return r.resizeExpansion(t);
                }, 50)), t ? (a(".services-sub-category").removeAttr("style").removeClass("items-shown"), 
                n.css("margin-bottom", this.previousSubCategoryHeight + "px"), n.animate({
                    "margin-bottom": s
                }, 100, "swing", function() {
                    n.addClass("items-shown");
                })) : (n.css("margin-bottom", s + "px"), n.addClass("items-shown")), this.previousSubCategoryHeight = s;
            } else a(".services-sub-category").removeAttr("style").removeClass("items-shown"), 
            this.previousSubCategoryHeight = 0, this.resizeRetries = 0;
            this.$scope.$evalAsync(function() {
                r.scrollParent = r.getScrollParent(r.element), r.htmlService.isWindowAboveBreakpoint(r.htmlService.WINDOW_SIZE_SM) && r.scrollParent ? r.ctrl.viewStyle = {
                    "min-height": "calc(100vh - " + r.scrollParent.getBoundingClientRect().top + "px)"
                } : r.ctrl.viewStyle = void 0;
            });
        }, e.prototype.updateActiveCardStyles = function() {
            var e = this;
            this.$timeout(function() {
                return e.resizeExpansion(!0);
            });
        }, e;
    }();
    i.$inject = [ "Constants", "Catalog", "KeywordService", "Logger", "HTMLService", "$element", "$filter", "$rootScope", "$scope", "$timeout" ], 
    i.MAX_RESIZE_RETRIES = 20, t.ServicesViewController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, i, s, o, l, c) {
            var g = this;
            this.ctrl = this, this.configChanged = !0, this.secrets = [], this.clearValidityWatcher = function() {
                g.validityWatcher && (g.validityWatcher(), g.validityWatcher = void 0), g.ctrl.reviewStep.allowed = !1;
            }, this.showPlan = function() {
                g.clearValidityWatcher(), g.ctrl.configPageShown = !1, g.configStep.hidden ? g.ctrl.nextTitle = "Update" : g.ctrl.nextTitle = "Next >", 
                g.planStep.valid = g.ctrl.selectedPlan !== g.originalPlan || !g.configStep.hidden;
            }, this.showConfig = function() {
                g.clearValidityWatcher(), g.ctrl.configPageShown = !0, g.configStep.valid = a.get(g.ctrl, "forms.orderConfigureForm.$valid") && g.configChanged, 
                g.reviewStep.allowed = g.configStep.valid, g.validityWatcher = g.$scope.$watch("$ctrl.forms.orderConfigureForm.$valid", function(e, t) {
                    g.configStep.valid = e && g.configChanged, g.reviewStep.allowed = g.configStep.valid;
                }), g.dataWatcher && g.dataWatcher(), g.dataWatcher = g.$scope.$watch(function() {
                    return g.ctrl.parameterData;
                }, function() {
                    g.configChanged = !n.equals(g.getParameters(g.ctrl.parameterData), g.origParameterData) || g.ctrl.selectedPlan !== g.originalPlan, 
                    g.configStep.valid = a.get(g.ctrl, "forms.orderConfigureForm.$valid") && g.configChanged;
                }, !0), g.ctrl.nextTitle = "Update";
            }, this.showResults = function() {
                g.clearValidityWatcher(), g.ctrl.configPageShown = !1, g.ctrl.nextTitle = "Close", 
                g.ctrl.wizardDone = !0, g.updateServiceConfig();
            }, this.selectPlan = function(e) {
                g.ctrl.selectedPlan = e, a.get(e, "metadata.name") === a.get(g.ctrl.serviceInstance, "spec.clusterServicePlanRef.name") ? g.ctrl.parameterData = n.copy(g.origParameterData) : g.ctrl.parameterData = {}, 
                g.updateParameterSchema(e), g.configChanged = !n.equals(g.ctrl.parameterData, g.origParameterData) || g.ctrl.selectedPlan !== g.originalPlan, 
                g.configStep.valid = a.get(g.ctrl, "forms.orderConfigureForm.$valid") && g.configChanged;
            }, this.updateServiceConfig = function() {
                g.ctrl.orderComplete = !1, g.ctrl.error = null;
                var e = g.getParameters(g.ctrl.parameterData), t = a.get(g.ctrl.serviceInstance, "spec.parameters"), r = a.map(t, function(e, t) {
                    return [ t ];
                }), i = a.pick(e, r), s = a.omit(e, r), o = n.copy(g.ctrl.serviceInstance);
                a.get(o, "spec.clusterServicePlanExternalName") !== a.get(g.ctrl.selectedPlan, "spec.externalName") && (a.unset(o, "spec.clusterServicePlanRef"), 
                a.set(o, "spec.clusterServicePlanExternalName", a.get(g.ctrl.selectedPlan, "spec.externalName"))), 
                n.equals(i, t) || a.set(o, "spec.parameters", i);
                var l = {};
                if (a.each(g.secrets, function(t) {
                    var r = JSON.parse(g.SecretsService.decodeSecretData(t.data).parameters), i = a.map(r, function(e, t) {
                        return [ t ];
                    }), c = a.pick(e, i);
                    s = a.omit(s, i), n.equals(c, r) || (n.extend(l, c), o.spec.parametersFrom = a.reject(o.spec.parametersFrom, {
                        secretKeyRef: {
                            name: t.metadata.name
                        }
                    }));
                }), n.extend(l, s), a.isEmpty(l)) g.updateServiceInstance(o); else {
                    var c = g.BindingService.generateSecretName(a.get(g.ctrl.serviceClass, "spec.externalName"));
                    o.spec.parametersFrom.push({
                        secretKeyRef: {
                            name: c,
                            key: "parameters"
                        }
                    });
                    var C = g.BindingService.makeParametersSecret(c, l, o), A = g.APIService.getPreferredVersion("secrets");
                    g.DataService.create(A, null, C, g.context).then(function() {
                        g.updateServiceInstance(o);
                    }, function(e) {
                        g.ctrl.error = a.get(e, "data");
                    });
                }
            }, this.$scope = e, this.$filter = t, this.$q = r, this.APIService = i, this.BindingService = s, 
            this.DataService = o, this.Logger = l, this.SecretsService = c;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.parameterData = {}, this.ctrl.forms = {}, this.ctrl.configStepValid = !0, 
            this.ctrl.wizardDone = !1, this.ctrl.orderComplete = !1, this.ctrl.error = null, 
            this.planStep = {
                id: "plans",
                label: "Plan",
                view: "update-service/update-service-plans.html",
                hidden: !a.get(this.ctrl.serviceClass, "spec.planUpdatable", !1) || a.size(this.ctrl.servicePlans) < 2,
                allowed: !0,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showPlan
            }, this.configStep = {
                label: "Configuration",
                id: "configure",
                view: "update-service/update-service-configure.html",
                hidden: !1,
                allowed: !0,
                valid: !1,
                allowClickNav: !0,
                onShow: this.showConfig
            }, this.reviewStep = {
                label: "Results",
                id: "results",
                view: "update-service/update-service-results.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                prevEnabled: !1,
                allowClickNav: !1,
                onShow: this.showResults
            }, this.ctrl.steps = [ this.planStep, this.configStep, this.reviewStep ], this.ctrl.orderedPlans = a.orderBy(this.ctrl.servicePlans, [ "spec.externalMetadata.displayName", "metadata.name" ]), 
            this.configChanged = !1, this.ctrl.displayName = this.$filter("serviceInstanceDisplayName")(this.ctrl.serviceInstance, this.ctrl.serviceClass), 
            this.ctrl.serviceName = a.get(this.ctrl.serviceInstance, "metadata.name"), this.planStep.hidden && (this.ctrl.hideBackButton = !0), 
            this.context = {
                namespace: a.get(this.ctrl.serviceInstance, "metadata.namespace")
            }, this.origParameterData = n.copy(a.get(this.ctrl.serviceInstance, "spec.parameters", {}));
            var t = [];
            a.each(a.get(this.ctrl.serviceInstance, "spec.parametersFrom"), function(r) {
                var n = e.APIService.getPreferredVersion("secrets"), i = a.get(r, "secretKeyRef.name"), s = a.find(e.secrets, function(e) {
                    return a.get(e, "metadata.name") === i;
                });
                s ? e.addParametersFromSecret(s, r) : t.push(e.DataService.get(n, i, e.context).then(function(t) {
                    e.addParametersFromSecret(t, r), e.secrets.push(t);
                }));
            }), this.$q.all(t).then(function() {
                e.originalPlan = a.find(e.ctrl.orderedPlans, function(t) {
                    return a.get(t, "metadata.name") === a.get(e.ctrl.serviceInstance, "spec.clusterServicePlanRef.name");
                }), e.selectPlan(e.originalPlan);
            });
        }, e.prototype.$onDestroy = function() {
            this.clearValidityWatcher(), this.dataWatcher && this.dataWatcher(), this.progressWatcher && this.DataService.unwatch(this.progressWatcher);
        }, e.prototype.closePanel = function() {
            n.isFunction(this.ctrl.handleClose) && this.ctrl.handleClose();
        }, e.prototype.updateParameterSchema = function(e) {
            this.ctrl.parameterSchema = a.get(e, "spec.instanceUpdateParameterSchema"), this.ctrl.parameterFormDefinition = a.get(e, "spec.externalMetadata.schemas.service_instance.update.openshift_form_definition");
            var t = a.get(this.ctrl.parameterSchema, "properties");
            this.configStep.hidden = a.size(t) < 1, this.configStep.hidden ? this.ctrl.nextTitle = "Update" : this.ctrl.nextTitle = "Next >", 
            this.planStep.valid = this.ctrl.selectedPlan !== this.originalPlan || !this.configStep.hidden;
        }, e.prototype.getParameters = function(e) {
            return a.omitBy(e, function(e) {
                return "" === e;
            });
        }, e.prototype.addParametersFromSecret = function(e, t) {
            try {
                var r = a.get(t, "secretKeyRef.key"), i = JSON.parse(this.SecretsService.decodeSecretData(e.data)[r]);
                n.extend(this.origParameterData, i), this.originalParameters = this.getParameters(this.origParameterData);
            } catch (e) {
                this.Logger.warn("Unable to load parameters from secret " + a.get(t, "secretKeyRef.name"), e);
            }
        }, e.prototype.updateServiceInstance = function(e) {
            var t = this, r = this.APIService.getPreferredVersion("serviceinstances"), n = this.$filter("isServiceInstanceReady"), i = this.$filter("isServiceInstanceFailed"), s = this.$filter("serviceInstanceFailedMessage");
            e.spec.updateRequests = e.spec.updateRequests ? e.spec.updateRequests + 1 : 1, this.DataService.update(r, a.get(this.ctrl.serviceInstance, "metadata.name"), e, this.context).then(function() {
                t.progressWatcher = t.DataService.watchObject(r, a.get(t.ctrl.serviceInstance, "metadata.name"), t.context, function(e) {
                    t.ctrl.orderComplete = n(e), i(e) && (t.ctrl.error = s(e));
                });
            }, function(e) {
                t.ctrl.error = a.get(e, "data");
            });
        }, e;
    }();
    i.$inject = [ "$scope", "$filter", "$q", "APIService", "BindingService", "DataService", "Logger", "SecretsService" ], 
    t.UpdateServiceController = i;
}, function(e, t, r) {
    var n;
    /*! showdown v 1.8.6 - 22-12-2017 */
    (function() {
        function a(e) {
            "use strict";
            var t = {
                omitExtraWLInCodeBlocks: {
                    defaultValue: !1,
                    describe: "Omit the default extra whiteline added to code blocks",
                    type: "boolean"
                },
                noHeaderId: {
                    defaultValue: !1,
                    describe: "Turn on/off generated header id",
                    type: "boolean"
                },
                prefixHeaderId: {
                    defaultValue: !1,
                    describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                    type: "string"
                },
                rawPrefixHeaderId: {
                    defaultValue: !1,
                    describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                    type: "boolean"
                },
                ghCompatibleHeaderId: {
                    defaultValue: !1,
                    describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                    type: "boolean"
                },
                rawHeaderId: {
                    defaultValue: !1,
                    describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                    type: "boolean"
                },
                headerLevelStart: {
                    defaultValue: !1,
                    describe: "The header blocks level start",
                    type: "integer"
                },
                parseImgDimensions: {
                    defaultValue: !1,
                    describe: "Turn on/off image dimension parsing",
                    type: "boolean"
                },
                simplifiedAutoLink: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM autolink style",
                    type: "boolean"
                },
                excludeTrailingPunctuationFromURLs: {
                    defaultValue: !1,
                    describe: "Excludes trailing punctuation from links generated with autoLinking",
                    type: "boolean"
                },
                literalMidWordUnderscores: {
                    defaultValue: !1,
                    describe: "Parse midword underscores as literal underscores",
                    type: "boolean"
                },
                literalMidWordAsterisks: {
                    defaultValue: !1,
                    describe: "Parse midword asterisks as literal asterisks",
                    type: "boolean"
                },
                strikethrough: {
                    defaultValue: !1,
                    describe: "Turn on/off strikethrough support",
                    type: "boolean"
                },
                tables: {
                    defaultValue: !1,
                    describe: "Turn on/off tables support",
                    type: "boolean"
                },
                tablesHeaderId: {
                    defaultValue: !1,
                    describe: "Add an id to table headers",
                    type: "boolean"
                },
                ghCodeBlocks: {
                    defaultValue: !0,
                    describe: "Turn on/off GFM fenced code blocks support",
                    type: "boolean"
                },
                tasklists: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM tasklist support",
                    type: "boolean"
                },
                smoothLivePreview: {
                    defaultValue: !1,
                    describe: "Prevents weird effects in live previews due to incomplete input",
                    type: "boolean"
                },
                smartIndentationFix: {
                    defaultValue: !1,
                    description: "Tries to smartly fix indentation in es6 strings",
                    type: "boolean"
                },
                disableForced4SpacesIndentedSublists: {
                    defaultValue: !1,
                    description: "Disables the requirement of indenting nested sublists by 4 spaces",
                    type: "boolean"
                },
                simpleLineBreaks: {
                    defaultValue: !1,
                    description: "Parses simple line breaks as <br> (GFM Style)",
                    type: "boolean"
                },
                requireSpaceBeforeHeadingText: {
                    defaultValue: !1,
                    description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                    type: "boolean"
                },
                ghMentions: {
                    defaultValue: !1,
                    description: "Enables github @mentions",
                    type: "boolean"
                },
                ghMentionsLink: {
                    defaultValue: "https://github.com/{u}",
                    description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                    type: "string"
                },
                encodeEmails: {
                    defaultValue: !0,
                    description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                    type: "boolean"
                },
                openLinksInNewWindow: {
                    defaultValue: !1,
                    description: "Open all links in new windows",
                    type: "boolean"
                },
                backslashEscapesHTMLTags: {
                    defaultValue: !1,
                    description: "Support for HTML Tag escaping. ex: <div>foo</div>",
                    type: "boolean"
                },
                emoji: {
                    defaultValue: !1,
                    description: "Enable emoji support. Ex: `this is a :smile: emoji`",
                    type: "boolean"
                },
                underline: {
                    defaultValue: !1,
                    description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                    type: "boolean"
                },
                completeHTMLDocument: {
                    defaultValue: !1,
                    description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                    type: "boolean"
                },
                metadata: {
                    defaultValue: !1,
                    description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                    type: "boolean"
                },
                splitAdjacentBlockquotes: {
                    defaultValue: !1,
                    description: "Split adjacent blockquote blocks",
                    type: "boolean"
                }
            };
            if (!1 === e) return JSON.parse(JSON.stringify(t));
            var r = {};
            for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n].defaultValue);
            return r;
        }
        function i() {
            "use strict";
            var e = a(!0), t = {};
            for (var r in e) e.hasOwnProperty(r) && (t[r] = !0);
            return t;
        }
        function s(e, t) {
            "use strict";
            var r = t ? "Error in " + t + " extension->" : "Error in unnamed extension", n = {
                valid: !0,
                error: ""
            };
            l.helper.isArray(e) || (e = [ e ]);
            for (var a = 0; a < e.length; ++a) {
                var i = r + " sub-extension " + a + ": ", s = e[a];
                if ("object" != typeof s) return n.valid = !1, n.error = i + "must be an object, but " + typeof s + " given", 
                n;
                if (!l.helper.isString(s.type)) return n.valid = !1, n.error = i + 'property "type" must be a string, but ' + typeof s.type + " given", 
                n;
                var o = s.type = s.type.toLowerCase();
                if ("language" === o && (o = s.type = "lang"), "html" === o && (o = s.type = "output"), 
                "lang" !== o && "output" !== o && "listener" !== o) return n.valid = !1, n.error = i + "type " + o + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', 
                n;
                if ("listener" === o) {
                    if (l.helper.isUndefined(s.listeners)) return n.valid = !1, n.error = i + '. Extensions of type "listener" must have a property called "listeners"', 
                    n;
                } else if (l.helper.isUndefined(s.filter) && l.helper.isUndefined(s.regex)) return n.valid = !1, 
                n.error = i + o + ' extensions must define either a "regex" property or a "filter" method', 
                n;
                if (s.listeners) {
                    if ("object" != typeof s.listeners) return n.valid = !1, n.error = i + '"listeners" property must be an object but ' + typeof s.listeners + " given", 
                    n;
                    for (var c in s.listeners) if (s.listeners.hasOwnProperty(c) && "function" != typeof s.listeners[c]) return n.valid = !1, 
                    n.error = i + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof s.listeners[c] + " given", 
                    n;
                }
                if (s.filter) {
                    if ("function" != typeof s.filter) return n.valid = !1, n.error = i + '"filter" must be a function, but ' + typeof s.filter + " given", 
                    n;
                } else if (s.regex) {
                    if (l.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")), !(s.regex instanceof RegExp)) return n.valid = !1, 
                    n.error = i + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given", 
                    n;
                    if (l.helper.isUndefined(s.replace)) return n.valid = !1, n.error = i + '"regex" extensions must implement a replace string or function', 
                    n;
                }
            }
            return n;
        }
        function o(e, t) {
            "use strict";
            return "¨E" + t.charCodeAt(0) + "E";
        }
        var l = {}, c = {}, g = {}, C = a(!0), A = "vanilla", I = {
            github: {
                omitExtraWLInCodeBlocks: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                disableForced4SpacesIndentedSublists: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghCompatibleHeaderId: !0,
                ghMentions: !0,
                backslashEscapesHTMLTags: !0,
                emoji: !0,
                splitAdjacentBlockquotes: !0
            },
            original: {
                noHeaderId: !0,
                ghCodeBlocks: !1
            },
            ghost: {
                omitExtraWLInCodeBlocks: !0,
                parseImgDimensions: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                smoothLivePreview: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghMentions: !1,
                encodeEmails: !0
            },
            vanilla: a(!0),
            allOn: i()
        };
        l.helper = {}, l.extensions = {}, l.setOption = function(e, t) {
            "use strict";
            return C[e] = t, this;
        }, l.getOption = function(e) {
            "use strict";
            return C[e];
        }, l.getOptions = function() {
            "use strict";
            return C;
        }, l.resetOptions = function() {
            "use strict";
            C = a(!0);
        }, l.setFlavor = function(e) {
            "use strict";
            if (!I.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            l.resetOptions();
            var t = I[e];
            A = e;
            for (var r in t) t.hasOwnProperty(r) && (C[r] = t[r]);
        }, l.getFlavor = function() {
            "use strict";
            return A;
        }, l.getFlavorOptions = function(e) {
            "use strict";
            if (I.hasOwnProperty(e)) return I[e];
        }, l.getDefaultOptions = function(e) {
            "use strict";
            return a(e);
        }, l.subParser = function(e, t) {
            "use strict";
            if (l.helper.isString(e)) {
                if (void 0 === t) {
                    if (c.hasOwnProperty(e)) return c[e];
                    throw Error("SubParser named " + e + " not registered!");
                }
                c[e] = t;
            }
        }, l.extension = function(e, t) {
            "use strict";
            if (!l.helper.isString(e)) throw Error("Extension 'name' must be a string");
            if (e = l.helper.stdExtName(e), l.helper.isUndefined(t)) {
                if (!g.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
                return g[e];
            }
            "function" == typeof t && (t = t()), l.helper.isArray(t) || (t = [ t ]);
            var r = s(t, e);
            if (!r.valid) throw Error(r.error);
            g[e] = t;
        }, l.getAllExtensions = function() {
            "use strict";
            return g;
        }, l.removeExtension = function(e) {
            "use strict";
            delete g[e];
        }, l.resetExtensions = function() {
            "use strict";
            g = {};
        }, l.validateExtension = function(e) {
            "use strict";
            var t = s(e, null);
            return !!t.valid || (console.warn(t.error), !1);
        }, l.hasOwnProperty("helper") || (l.helper = {}), l.helper.isString = function(e) {
            "use strict";
            return "string" == typeof e || e instanceof String;
        }, l.helper.isFunction = function(e) {
            "use strict";
            var t = {};
            return e && "[object Function]" === t.toString.call(e);
        }, l.helper.isArray = function(e) {
            "use strict";
            return Array.isArray(e);
        }, l.helper.isUndefined = function(e) {
            "use strict";
            return void 0 === e;
        }, l.helper.forEach = function(e, t) {
            "use strict";
            if (l.helper.isUndefined(e)) throw new Error("obj param is required");
            if (l.helper.isUndefined(t)) throw new Error("callback param is required");
            if (!l.helper.isFunction(t)) throw new Error("callback param must be a function/closure");
            if ("function" == typeof e.forEach) e.forEach(t); else if (l.helper.isArray(e)) for (var r = 0; r < e.length; r++) t(e[r], r, e); else {
                if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
                for (var n in e) e.hasOwnProperty(n) && t(e[n], n, e);
            }
        }, l.helper.stdExtName = function(e) {
            "use strict";
            return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
        }, l.helper.escapeCharactersCallback = o, l.helper.escapeCharacters = function(e, t, r) {
            "use strict";
            var n = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
            r && (n = "\\\\" + n);
            var a = new RegExp(n, "g");
            return e = e.replace(a, o);
        };
        var d = function(e, t, r, n) {
            "use strict";
            var a, i, s, o, l, c = n || "", g = c.indexOf("g") > -1, C = new RegExp(t + "|" + r, "g" + c.replace(/g/g, "")), A = new RegExp(t, c.replace(/g/g, "")), I = [];
            do {
                for (a = 0; s = C.exec(e); ) if (A.test(s[0])) a++ || (i = C.lastIndex, o = i - s[0].length); else if (a && !--a) {
                    l = s.index + s[0].length;
                    var d = {
                        left: {
                            start: o,
                            end: i
                        },
                        match: {
                            start: i,
                            end: s.index
                        },
                        right: {
                            start: s.index,
                            end: l
                        },
                        wholeMatch: {
                            start: o,
                            end: l
                        }
                    };
                    if (I.push(d), !g) return I;
                }
            } while (a && (C.lastIndex = i));
            return I;
        };
        l.helper.matchRecursiveRegExp = function(e, t, r, n) {
            "use strict";
            for (var a = d(e, t, r, n), i = [], s = 0; s < a.length; ++s) i.push([ e.slice(a[s].wholeMatch.start, a[s].wholeMatch.end), e.slice(a[s].match.start, a[s].match.end), e.slice(a[s].left.start, a[s].left.end), e.slice(a[s].right.start, a[s].right.end) ]);
            return i;
        }, l.helper.replaceRecursiveRegExp = function(e, t, r, n, a) {
            "use strict";
            if (!l.helper.isFunction(t)) {
                var i = t;
                t = function() {
                    return i;
                };
            }
            var s = d(e, r, n, a), o = e, c = s.length;
            if (c > 0) {
                var g = [];
                0 !== s[0].wholeMatch.start && g.push(e.slice(0, s[0].wholeMatch.start));
                for (var C = 0; C < c; ++C) g.push(t(e.slice(s[C].wholeMatch.start, s[C].wholeMatch.end), e.slice(s[C].match.start, s[C].match.end), e.slice(s[C].left.start, s[C].left.end), e.slice(s[C].right.start, s[C].right.end))), 
                C < c - 1 && g.push(e.slice(s[C].wholeMatch.end, s[C + 1].wholeMatch.start));
                s[c - 1].wholeMatch.end < e.length && g.push(e.slice(s[c - 1].wholeMatch.end)), 
                o = g.join("");
            }
            return o;
        }, l.helper.regexIndexOf = function(e, t, r) {
            "use strict";
            if (!l.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            if (t instanceof RegExp == !1) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
            var n = e.substring(r || 0).search(t);
            return n >= 0 ? n + (r || 0) : n;
        }, l.helper.splitAtIndex = function(e, t) {
            "use strict";
            if (!l.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            return [ e.substring(0, t), e.substring(t) ];
        }, l.helper.encodeEmailAddress = function(e) {
            "use strict";
            var t = [ function(e) {
                return "&#" + e.charCodeAt(0) + ";";
            }, function(e) {
                return "&#x" + e.charCodeAt(0).toString(16) + ";";
            }, function(e) {
                return e;
            } ];
            return e = e.replace(/./g, function(e) {
                if ("@" === e) e = t[Math.floor(2 * Math.random())](e); else {
                    var r = Math.random();
                    e = r > .9 ? t[2](e) : r > .45 ? t[1](e) : t[0](e);
                }
                return e;
            });
        }, "undefined" == typeof console && (console = {
            warn: function(e) {
                "use strict";
                alert(e);
            },
            log: function(e) {
                "use strict";
                alert(e);
            },
            error: function(e) {
                "use strict";
                throw e;
            }
        }), l.helper.regexes = {
            asteriskDashAndColon: /([*_:~])/g
        }, l.helper.emojis = {
            "+1": "👍",
            "-1": "👎",
            "100": "💯",
            "1234": "🔢",
            "1st_place_medal": "🥇",
            "2nd_place_medal": "🥈",
            "3rd_place_medal": "🥉",
            "8ball": "🎱",
            a: "🅰️",
            ab: "🆎",
            abc: "🔤",
            abcd: "🔡",
            accept: "🉑",
            aerial_tramway: "🚡",
            airplane: "✈️",
            alarm_clock: "⏰",
            alembic: "⚗️",
            alien: "👽",
            ambulance: "🚑",
            amphora: "🏺",
            anchor: "⚓️",
            angel: "👼",
            anger: "💢",
            angry: "😠",
            anguished: "😧",
            ant: "🐜",
            apple: "🍎",
            aquarius: "♒️",
            aries: "♈️",
            arrow_backward: "◀️",
            arrow_double_down: "⏬",
            arrow_double_up: "⏫",
            arrow_down: "⬇️",
            arrow_down_small: "🔽",
            arrow_forward: "▶️",
            arrow_heading_down: "⤵️",
            arrow_heading_up: "⤴️",
            arrow_left: "⬅️",
            arrow_lower_left: "↙️",
            arrow_lower_right: "↘️",
            arrow_right: "➡️",
            arrow_right_hook: "↪️",
            arrow_up: "⬆️",
            arrow_up_down: "↕️",
            arrow_up_small: "🔼",
            arrow_upper_left: "↖️",
            arrow_upper_right: "↗️",
            arrows_clockwise: "🔃",
            arrows_counterclockwise: "🔄",
            art: "🎨",
            articulated_lorry: "🚛",
            artificial_satellite: "🛰",
            astonished: "😲",
            athletic_shoe: "👟",
            atm: "🏧",
            atom_symbol: "⚛️",
            avocado: "🥑",
            b: "🅱️",
            baby: "👶",
            baby_bottle: "🍼",
            baby_chick: "🐤",
            baby_symbol: "🚼",
            back: "🔙",
            bacon: "🥓",
            badminton: "🏸",
            baggage_claim: "🛄",
            baguette_bread: "🥖",
            balance_scale: "⚖️",
            balloon: "🎈",
            ballot_box: "🗳",
            ballot_box_with_check: "☑️",
            bamboo: "🎍",
            banana: "🍌",
            bangbang: "‼️",
            bank: "🏦",
            bar_chart: "📊",
            barber: "💈",
            baseball: "⚾️",
            basketball: "🏀",
            basketball_man: "⛹️",
            basketball_woman: "⛹️&zwj;♀️",
            bat: "🦇",
            bath: "🛀",
            bathtub: "🛁",
            battery: "🔋",
            beach_umbrella: "🏖",
            bear: "🐻",
            bed: "🛏",
            bee: "🐝",
            beer: "🍺",
            beers: "🍻",
            beetle: "🐞",
            beginner: "🔰",
            bell: "🔔",
            bellhop_bell: "🛎",
            bento: "🍱",
            biking_man: "🚴",
            bike: "🚲",
            biking_woman: "🚴&zwj;♀️",
            bikini: "👙",
            biohazard: "☣️",
            bird: "🐦",
            birthday: "🎂",
            black_circle: "⚫️",
            black_flag: "🏴",
            black_heart: "🖤",
            black_joker: "🃏",
            black_large_square: "⬛️",
            black_medium_small_square: "◾️",
            black_medium_square: "◼️",
            black_nib: "✒️",
            black_small_square: "▪️",
            black_square_button: "🔲",
            blonde_man: "👱",
            blonde_woman: "👱&zwj;♀️",
            blossom: "🌼",
            blowfish: "🐡",
            blue_book: "📘",
            blue_car: "🚙",
            blue_heart: "💙",
            blush: "😊",
            boar: "🐗",
            boat: "⛵️",
            bomb: "💣",
            book: "📖",
            bookmark: "🔖",
            bookmark_tabs: "📑",
            books: "📚",
            boom: "💥",
            boot: "👢",
            bouquet: "💐",
            bowing_man: "🙇",
            bow_and_arrow: "🏹",
            bowing_woman: "🙇&zwj;♀️",
            bowling: "🎳",
            boxing_glove: "🥊",
            boy: "👦",
            bread: "🍞",
            bride_with_veil: "👰",
            bridge_at_night: "🌉",
            briefcase: "💼",
            broken_heart: "💔",
            bug: "🐛",
            building_construction: "🏗",
            bulb: "💡",
            bullettrain_front: "🚅",
            bullettrain_side: "🚄",
            burrito: "🌯",
            bus: "🚌",
            business_suit_levitating: "🕴",
            busstop: "🚏",
            bust_in_silhouette: "👤",
            busts_in_silhouette: "👥",
            butterfly: "🦋",
            cactus: "🌵",
            cake: "🍰",
            calendar: "📆",
            call_me_hand: "🤙",
            calling: "📲",
            camel: "🐫",
            camera: "📷",
            camera_flash: "📸",
            camping: "🏕",
            cancer: "♋️",
            candle: "🕯",
            candy: "🍬",
            canoe: "🛶",
            capital_abcd: "🔠",
            capricorn: "♑️",
            car: "🚗",
            card_file_box: "🗃",
            card_index: "📇",
            card_index_dividers: "🗂",
            carousel_horse: "🎠",
            carrot: "🥕",
            cat: "🐱",
            cat2: "🐈",
            cd: "💿",
            chains: "⛓",
            champagne: "🍾",
            chart: "💹",
            chart_with_downwards_trend: "📉",
            chart_with_upwards_trend: "📈",
            checkered_flag: "🏁",
            cheese: "🧀",
            cherries: "🍒",
            cherry_blossom: "🌸",
            chestnut: "🌰",
            chicken: "🐔",
            children_crossing: "🚸",
            chipmunk: "🐿",
            chocolate_bar: "🍫",
            christmas_tree: "🎄",
            church: "⛪️",
            cinema: "🎦",
            circus_tent: "🎪",
            city_sunrise: "🌇",
            city_sunset: "🌆",
            cityscape: "🏙",
            cl: "🆑",
            clamp: "🗜",
            clap: "👏",
            clapper: "🎬",
            classical_building: "🏛",
            clinking_glasses: "🥂",
            clipboard: "📋",
            clock1: "🕐",
            clock10: "🕙",
            clock1030: "🕥",
            clock11: "🕚",
            clock1130: "🕦",
            clock12: "🕛",
            clock1230: "🕧",
            clock130: "🕜",
            clock2: "🕑",
            clock230: "🕝",
            clock3: "🕒",
            clock330: "🕞",
            clock4: "🕓",
            clock430: "🕟",
            clock5: "🕔",
            clock530: "🕠",
            clock6: "🕕",
            clock630: "🕡",
            clock7: "🕖",
            clock730: "🕢",
            clock8: "🕗",
            clock830: "🕣",
            clock9: "🕘",
            clock930: "🕤",
            closed_book: "📕",
            closed_lock_with_key: "🔐",
            closed_umbrella: "🌂",
            cloud: "☁️",
            cloud_with_lightning: "🌩",
            cloud_with_lightning_and_rain: "⛈",
            cloud_with_rain: "🌧",
            cloud_with_snow: "🌨",
            clown_face: "🤡",
            clubs: "♣️",
            cocktail: "🍸",
            coffee: "☕️",
            coffin: "⚰️",
            cold_sweat: "😰",
            comet: "☄️",
            computer: "💻",
            computer_mouse: "🖱",
            confetti_ball: "🎊",
            confounded: "😖",
            confused: "😕",
            congratulations: "㊗️",
            construction: "🚧",
            construction_worker_man: "👷",
            construction_worker_woman: "👷&zwj;♀️",
            control_knobs: "🎛",
            convenience_store: "🏪",
            cookie: "🍪",
            cool: "🆒",
            policeman: "👮",
            copyright: "©️",
            corn: "🌽",
            couch_and_lamp: "🛋",
            couple: "👫",
            couple_with_heart_woman_man: "💑",
            couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
            couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
            couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
            couplekiss_man_woman: "💏",
            couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
            cow: "🐮",
            cow2: "🐄",
            cowboy_hat_face: "🤠",
            crab: "🦀",
            crayon: "🖍",
            credit_card: "💳",
            crescent_moon: "🌙",
            cricket: "🏏",
            crocodile: "🐊",
            croissant: "🥐",
            crossed_fingers: "🤞",
            crossed_flags: "🎌",
            crossed_swords: "⚔️",
            crown: "👑",
            cry: "😢",
            crying_cat_face: "😿",
            crystal_ball: "🔮",
            cucumber: "🥒",
            cupid: "💘",
            curly_loop: "➰",
            currency_exchange: "💱",
            curry: "🍛",
            custard: "🍮",
            customs: "🛃",
            cyclone: "🌀",
            dagger: "🗡",
            dancer: "💃",
            dancing_women: "👯",
            dancing_men: "👯&zwj;♂️",
            dango: "🍡",
            dark_sunglasses: "🕶",
            dart: "🎯",
            dash: "💨",
            date: "📅",
            deciduous_tree: "🌳",
            deer: "🦌",
            department_store: "🏬",
            derelict_house: "🏚",
            desert: "🏜",
            desert_island: "🏝",
            desktop_computer: "🖥",
            male_detective: "🕵️",
            diamond_shape_with_a_dot_inside: "💠",
            diamonds: "♦️",
            disappointed: "😞",
            disappointed_relieved: "😥",
            dizzy: "💫",
            dizzy_face: "😵",
            do_not_litter: "🚯",
            dog: "🐶",
            dog2: "🐕",
            dollar: "💵",
            dolls: "🎎",
            dolphin: "🐬",
            door: "🚪",
            doughnut: "🍩",
            dove: "🕊",
            dragon: "🐉",
            dragon_face: "🐲",
            dress: "👗",
            dromedary_camel: "🐪",
            drooling_face: "🤤",
            droplet: "💧",
            drum: "🥁",
            duck: "🦆",
            dvd: "📀",
            "e-mail": "📧",
            eagle: "🦅",
            ear: "👂",
            ear_of_rice: "🌾",
            earth_africa: "🌍",
            earth_americas: "🌎",
            earth_asia: "🌏",
            egg: "🥚",
            eggplant: "🍆",
            eight_pointed_black_star: "✴️",
            eight_spoked_asterisk: "✳️",
            electric_plug: "🔌",
            elephant: "🐘",
            email: "✉️",
            end: "🔚",
            envelope_with_arrow: "📩",
            euro: "💶",
            european_castle: "🏰",
            european_post_office: "🏤",
            evergreen_tree: "🌲",
            exclamation: "❗️",
            expressionless: "😑",
            eye: "👁",
            eye_speech_bubble: "👁&zwj;🗨",
            eyeglasses: "👓",
            eyes: "👀",
            face_with_head_bandage: "🤕",
            face_with_thermometer: "🤒",
            fist_oncoming: "👊",
            factory: "🏭",
            fallen_leaf: "🍂",
            family_man_woman_boy: "👪",
            family_man_boy: "👨&zwj;👦",
            family_man_boy_boy: "👨&zwj;👦&zwj;👦",
            family_man_girl: "👨&zwj;👧",
            family_man_girl_boy: "👨&zwj;👧&zwj;👦",
            family_man_girl_girl: "👨&zwj;👧&zwj;👧",
            family_man_man_boy: "👨&zwj;👨&zwj;👦",
            family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
            family_man_man_girl: "👨&zwj;👨&zwj;👧",
            family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
            family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
            family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
            family_man_woman_girl: "👨&zwj;👩&zwj;👧",
            family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
            family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
            family_woman_boy: "👩&zwj;👦",
            family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
            family_woman_girl: "👩&zwj;👧",
            family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
            family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
            family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
            family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
            family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
            family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
            family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
            fast_forward: "⏩",
            fax: "📠",
            fearful: "😨",
            feet: "🐾",
            female_detective: "🕵️&zwj;♀️",
            ferris_wheel: "🎡",
            ferry: "⛴",
            field_hockey: "🏑",
            file_cabinet: "🗄",
            file_folder: "📁",
            film_projector: "📽",
            film_strip: "🎞",
            fire: "🔥",
            fire_engine: "🚒",
            fireworks: "🎆",
            first_quarter_moon: "🌓",
            first_quarter_moon_with_face: "🌛",
            fish: "🐟",
            fish_cake: "🍥",
            fishing_pole_and_fish: "🎣",
            fist_raised: "✊",
            fist_left: "🤛",
            fist_right: "🤜",
            flags: "🎏",
            flashlight: "🔦",
            fleur_de_lis: "⚜️",
            flight_arrival: "🛬",
            flight_departure: "🛫",
            floppy_disk: "💾",
            flower_playing_cards: "🎴",
            flushed: "😳",
            fog: "🌫",
            foggy: "🌁",
            football: "🏈",
            footprints: "👣",
            fork_and_knife: "🍴",
            fountain: "⛲️",
            fountain_pen: "🖋",
            four_leaf_clover: "🍀",
            fox_face: "🦊",
            framed_picture: "🖼",
            free: "🆓",
            fried_egg: "🍳",
            fried_shrimp: "🍤",
            fries: "🍟",
            frog: "🐸",
            frowning: "😦",
            frowning_face: "☹️",
            frowning_man: "🙍&zwj;♂️",
            frowning_woman: "🙍",
            middle_finger: "🖕",
            fuelpump: "⛽️",
            full_moon: "🌕",
            full_moon_with_face: "🌝",
            funeral_urn: "⚱️",
            game_die: "🎲",
            gear: "⚙️",
            gem: "💎",
            gemini: "♊️",
            ghost: "👻",
            gift: "🎁",
            gift_heart: "💝",
            girl: "👧",
            globe_with_meridians: "🌐",
            goal_net: "🥅",
            goat: "🐐",
            golf: "⛳️",
            golfing_man: "🏌️",
            golfing_woman: "🏌️&zwj;♀️",
            gorilla: "🦍",
            grapes: "🍇",
            green_apple: "🍏",
            green_book: "📗",
            green_heart: "💚",
            green_salad: "🥗",
            grey_exclamation: "❕",
            grey_question: "❔",
            grimacing: "😬",
            grin: "😁",
            grinning: "😀",
            guardsman: "💂",
            guardswoman: "💂&zwj;♀️",
            guitar: "🎸",
            gun: "🔫",
            haircut_woman: "💇",
            haircut_man: "💇&zwj;♂️",
            hamburger: "🍔",
            hammer: "🔨",
            hammer_and_pick: "⚒",
            hammer_and_wrench: "🛠",
            hamster: "🐹",
            hand: "✋",
            handbag: "👜",
            handshake: "🤝",
            hankey: "💩",
            hatched_chick: "🐥",
            hatching_chick: "🐣",
            headphones: "🎧",
            hear_no_evil: "🙉",
            heart: "❤️",
            heart_decoration: "💟",
            heart_eyes: "😍",
            heart_eyes_cat: "😻",
            heartbeat: "💓",
            heartpulse: "💗",
            hearts: "♥️",
            heavy_check_mark: "✔️",
            heavy_division_sign: "➗",
            heavy_dollar_sign: "💲",
            heavy_heart_exclamation: "❣️",
            heavy_minus_sign: "➖",
            heavy_multiplication_x: "✖️",
            heavy_plus_sign: "➕",
            helicopter: "🚁",
            herb: "🌿",
            hibiscus: "🌺",
            high_brightness: "🔆",
            high_heel: "👠",
            hocho: "🔪",
            hole: "🕳",
            honey_pot: "🍯",
            horse: "🐴",
            horse_racing: "🏇",
            hospital: "🏥",
            hot_pepper: "🌶",
            hotdog: "🌭",
            hotel: "🏨",
            hotsprings: "♨️",
            hourglass: "⌛️",
            hourglass_flowing_sand: "⏳",
            house: "🏠",
            house_with_garden: "🏡",
            houses: "🏘",
            hugs: "🤗",
            hushed: "😯",
            ice_cream: "🍨",
            ice_hockey: "🏒",
            ice_skate: "⛸",
            icecream: "🍦",
            id: "🆔",
            ideograph_advantage: "🉐",
            imp: "👿",
            inbox_tray: "📥",
            incoming_envelope: "📨",
            tipping_hand_woman: "💁",
            information_source: "ℹ️",
            innocent: "😇",
            interrobang: "⁉️",
            iphone: "📱",
            izakaya_lantern: "🏮",
            jack_o_lantern: "🎃",
            japan: "🗾",
            japanese_castle: "🏯",
            japanese_goblin: "👺",
            japanese_ogre: "👹",
            jeans: "👖",
            joy: "😂",
            joy_cat: "😹",
            joystick: "🕹",
            kaaba: "🕋",
            key: "🔑",
            keyboard: "⌨️",
            keycap_ten: "🔟",
            kick_scooter: "🛴",
            kimono: "👘",
            kiss: "💋",
            kissing: "😗",
            kissing_cat: "😽",
            kissing_closed_eyes: "😚",
            kissing_heart: "😘",
            kissing_smiling_eyes: "😙",
            kiwi_fruit: "🥝",
            koala: "🐨",
            koko: "🈁",
            label: "🏷",
            large_blue_circle: "🔵",
            large_blue_diamond: "🔷",
            large_orange_diamond: "🔶",
            last_quarter_moon: "🌗",
            last_quarter_moon_with_face: "🌜",
            latin_cross: "✝️",
            laughing: "😆",
            leaves: "🍃",
            ledger: "📒",
            left_luggage: "🛅",
            left_right_arrow: "↔️",
            leftwards_arrow_with_hook: "↩️",
            lemon: "🍋",
            leo: "♌️",
            leopard: "🐆",
            level_slider: "🎚",
            libra: "♎️",
            light_rail: "🚈",
            link: "🔗",
            lion: "🦁",
            lips: "👄",
            lipstick: "💄",
            lizard: "🦎",
            lock: "🔒",
            lock_with_ink_pen: "🔏",
            lollipop: "🍭",
            loop: "➿",
            loud_sound: "🔊",
            loudspeaker: "📢",
            love_hotel: "🏩",
            love_letter: "💌",
            low_brightness: "🔅",
            lying_face: "🤥",
            m: "Ⓜ️",
            mag: "🔍",
            mag_right: "🔎",
            mahjong: "🀄️",
            mailbox: "📫",
            mailbox_closed: "📪",
            mailbox_with_mail: "📬",
            mailbox_with_no_mail: "📭",
            man: "👨",
            man_artist: "👨&zwj;🎨",
            man_astronaut: "👨&zwj;🚀",
            man_cartwheeling: "🤸&zwj;♂️",
            man_cook: "👨&zwj;🍳",
            man_dancing: "🕺",
            man_facepalming: "🤦&zwj;♂️",
            man_factory_worker: "👨&zwj;🏭",
            man_farmer: "👨&zwj;🌾",
            man_firefighter: "👨&zwj;🚒",
            man_health_worker: "👨&zwj;⚕️",
            man_in_tuxedo: "🤵",
            man_judge: "👨&zwj;⚖️",
            man_juggling: "🤹&zwj;♂️",
            man_mechanic: "👨&zwj;🔧",
            man_office_worker: "👨&zwj;💼",
            man_pilot: "👨&zwj;✈️",
            man_playing_handball: "🤾&zwj;♂️",
            man_playing_water_polo: "🤽&zwj;♂️",
            man_scientist: "👨&zwj;🔬",
            man_shrugging: "🤷&zwj;♂️",
            man_singer: "👨&zwj;🎤",
            man_student: "👨&zwj;🎓",
            man_teacher: "👨&zwj;🏫",
            man_technologist: "👨&zwj;💻",
            man_with_gua_pi_mao: "👲",
            man_with_turban: "👳",
            tangerine: "🍊",
            mans_shoe: "👞",
            mantelpiece_clock: "🕰",
            maple_leaf: "🍁",
            martial_arts_uniform: "🥋",
            mask: "😷",
            massage_woman: "💆",
            massage_man: "💆&zwj;♂️",
            meat_on_bone: "🍖",
            medal_military: "🎖",
            medal_sports: "🏅",
            mega: "📣",
            melon: "🍈",
            memo: "📝",
            men_wrestling: "🤼&zwj;♂️",
            menorah: "🕎",
            mens: "🚹",
            metal: "🤘",
            metro: "🚇",
            microphone: "🎤",
            microscope: "🔬",
            milk_glass: "🥛",
            milky_way: "🌌",
            minibus: "🚐",
            minidisc: "💽",
            mobile_phone_off: "📴",
            money_mouth_face: "🤑",
            money_with_wings: "💸",
            moneybag: "💰",
            monkey: "🐒",
            monkey_face: "🐵",
            monorail: "🚝",
            moon: "🌔",
            mortar_board: "🎓",
            mosque: "🕌",
            motor_boat: "🛥",
            motor_scooter: "🛵",
            motorcycle: "🏍",
            motorway: "🛣",
            mount_fuji: "🗻",
            mountain: "⛰",
            mountain_biking_man: "🚵",
            mountain_biking_woman: "🚵&zwj;♀️",
            mountain_cableway: "🚠",
            mountain_railway: "🚞",
            mountain_snow: "🏔",
            mouse: "🐭",
            mouse2: "🐁",
            movie_camera: "🎥",
            moyai: "🗿",
            mrs_claus: "🤶",
            muscle: "💪",
            mushroom: "🍄",
            musical_keyboard: "🎹",
            musical_note: "🎵",
            musical_score: "🎼",
            mute: "🔇",
            nail_care: "💅",
            name_badge: "📛",
            national_park: "🏞",
            nauseated_face: "🤢",
            necktie: "👔",
            negative_squared_cross_mark: "❎",
            nerd_face: "🤓",
            neutral_face: "😐",
            new: "🆕",
            new_moon: "🌑",
            new_moon_with_face: "🌚",
            newspaper: "📰",
            newspaper_roll: "🗞",
            next_track_button: "⏭",
            ng: "🆖",
            no_good_man: "🙅&zwj;♂️",
            no_good_woman: "🙅",
            night_with_stars: "🌃",
            no_bell: "🔕",
            no_bicycles: "🚳",
            no_entry: "⛔️",
            no_entry_sign: "🚫",
            no_mobile_phones: "📵",
            no_mouth: "😶",
            no_pedestrians: "🚷",
            no_smoking: "🚭",
            "non-potable_water": "🚱",
            nose: "👃",
            notebook: "📓",
            notebook_with_decorative_cover: "📔",
            notes: "🎶",
            nut_and_bolt: "🔩",
            o: "⭕️",
            o2: "🅾️",
            ocean: "🌊",
            octopus: "🐙",
            oden: "🍢",
            office: "🏢",
            oil_drum: "🛢",
            ok: "🆗",
            ok_hand: "👌",
            ok_man: "🙆&zwj;♂️",
            ok_woman: "🙆",
            old_key: "🗝",
            older_man: "👴",
            older_woman: "👵",
            om: "🕉",
            on: "🔛",
            oncoming_automobile: "🚘",
            oncoming_bus: "🚍",
            oncoming_police_car: "🚔",
            oncoming_taxi: "🚖",
            open_file_folder: "📂",
            open_hands: "👐",
            open_mouth: "😮",
            open_umbrella: "☂️",
            ophiuchus: "⛎",
            orange_book: "📙",
            orthodox_cross: "☦️",
            outbox_tray: "📤",
            owl: "🦉",
            ox: "🐂",
            package: "📦",
            page_facing_up: "📄",
            page_with_curl: "📃",
            pager: "📟",
            paintbrush: "🖌",
            palm_tree: "🌴",
            pancakes: "🥞",
            panda_face: "🐼",
            paperclip: "📎",
            paperclips: "🖇",
            parasol_on_ground: "⛱",
            parking: "🅿️",
            part_alternation_mark: "〽️",
            partly_sunny: "⛅️",
            passenger_ship: "🛳",
            passport_control: "🛂",
            pause_button: "⏸",
            peace_symbol: "☮️",
            peach: "🍑",
            peanuts: "🥜",
            pear: "🍐",
            pen: "🖊",
            pencil2: "✏️",
            penguin: "🐧",
            pensive: "😔",
            performing_arts: "🎭",
            persevere: "😣",
            person_fencing: "🤺",
            pouting_woman: "🙎",
            phone: "☎️",
            pick: "⛏",
            pig: "🐷",
            pig2: "🐖",
            pig_nose: "🐽",
            pill: "💊",
            pineapple: "🍍",
            ping_pong: "🏓",
            pisces: "♓️",
            pizza: "🍕",
            place_of_worship: "🛐",
            plate_with_cutlery: "🍽",
            play_or_pause_button: "⏯",
            point_down: "👇",
            point_left: "👈",
            point_right: "👉",
            point_up: "☝️",
            point_up_2: "👆",
            police_car: "🚓",
            policewoman: "👮&zwj;♀️",
            poodle: "🐩",
            popcorn: "🍿",
            post_office: "🏣",
            postal_horn: "📯",
            postbox: "📮",
            potable_water: "🚰",
            potato: "🥔",
            pouch: "👝",
            poultry_leg: "🍗",
            pound: "💷",
            rage: "😡",
            pouting_cat: "😾",
            pouting_man: "🙎&zwj;♂️",
            pray: "🙏",
            prayer_beads: "📿",
            pregnant_woman: "🤰",
            previous_track_button: "⏮",
            prince: "🤴",
            princess: "👸",
            printer: "🖨",
            purple_heart: "💜",
            purse: "👛",
            pushpin: "📌",
            put_litter_in_its_place: "🚮",
            question: "❓",
            rabbit: "🐰",
            rabbit2: "🐇",
            racehorse: "🐎",
            racing_car: "🏎",
            radio: "📻",
            radio_button: "🔘",
            radioactive: "☢️",
            railway_car: "🚃",
            railway_track: "🛤",
            rainbow: "🌈",
            rainbow_flag: "🏳️&zwj;🌈",
            raised_back_of_hand: "🤚",
            raised_hand_with_fingers_splayed: "🖐",
            raised_hands: "🙌",
            raising_hand_woman: "🙋",
            raising_hand_man: "🙋&zwj;♂️",
            ram: "🐏",
            ramen: "🍜",
            rat: "🐀",
            record_button: "⏺",
            recycle: "♻️",
            red_circle: "🔴",
            registered: "®️",
            relaxed: "☺️",
            relieved: "😌",
            reminder_ribbon: "🎗",
            repeat: "🔁",
            repeat_one: "🔂",
            rescue_worker_helmet: "⛑",
            restroom: "🚻",
            revolving_hearts: "💞",
            rewind: "⏪",
            rhinoceros: "🦏",
            ribbon: "🎀",
            rice: "🍚",
            rice_ball: "🍙",
            rice_cracker: "🍘",
            rice_scene: "🎑",
            right_anger_bubble: "🗯",
            ring: "💍",
            robot: "🤖",
            rocket: "🚀",
            rofl: "🤣",
            roll_eyes: "🙄",
            roller_coaster: "🎢",
            rooster: "🐓",
            rose: "🌹",
            rosette: "🏵",
            rotating_light: "🚨",
            round_pushpin: "📍",
            rowing_man: "🚣",
            rowing_woman: "🚣&zwj;♀️",
            rugby_football: "🏉",
            running_man: "🏃",
            running_shirt_with_sash: "🎽",
            running_woman: "🏃&zwj;♀️",
            sa: "🈂️",
            sagittarius: "♐️",
            sake: "🍶",
            sandal: "👡",
            santa: "🎅",
            satellite: "📡",
            saxophone: "🎷",
            school: "🏫",
            school_satchel: "🎒",
            scissors: "✂️",
            scorpion: "🦂",
            scorpius: "♏️",
            scream: "😱",
            scream_cat: "🙀",
            scroll: "📜",
            seat: "💺",
            secret: "㊙️",
            see_no_evil: "🙈",
            seedling: "🌱",
            selfie: "🤳",
            shallow_pan_of_food: "🥘",
            shamrock: "☘️",
            shark: "🦈",
            shaved_ice: "🍧",
            sheep: "🐑",
            shell: "🐚",
            shield: "🛡",
            shinto_shrine: "⛩",
            ship: "🚢",
            shirt: "👕",
            shopping: "🛍",
            shopping_cart: "🛒",
            shower: "🚿",
            shrimp: "🦐",
            signal_strength: "📶",
            six_pointed_star: "🔯",
            ski: "🎿",
            skier: "⛷",
            skull: "💀",
            skull_and_crossbones: "☠️",
            sleeping: "😴",
            sleeping_bed: "🛌",
            sleepy: "😪",
            slightly_frowning_face: "🙁",
            slightly_smiling_face: "🙂",
            slot_machine: "🎰",
            small_airplane: "🛩",
            small_blue_diamond: "🔹",
            small_orange_diamond: "🔸",
            small_red_triangle: "🔺",
            small_red_triangle_down: "🔻",
            smile: "😄",
            smile_cat: "😸",
            smiley: "😃",
            smiley_cat: "😺",
            smiling_imp: "😈",
            smirk: "😏",
            smirk_cat: "😼",
            smoking: "🚬",
            snail: "🐌",
            snake: "🐍",
            sneezing_face: "🤧",
            snowboarder: "🏂",
            snowflake: "❄️",
            snowman: "⛄️",
            snowman_with_snow: "☃️",
            sob: "😭",
            soccer: "⚽️",
            soon: "🔜",
            sos: "🆘",
            sound: "🔉",
            space_invader: "👾",
            spades: "♠️",
            spaghetti: "🍝",
            sparkle: "❇️",
            sparkler: "🎇",
            sparkles: "✨",
            sparkling_heart: "💖",
            speak_no_evil: "🙊",
            speaker: "🔈",
            speaking_head: "🗣",
            speech_balloon: "💬",
            speedboat: "🚤",
            spider: "🕷",
            spider_web: "🕸",
            spiral_calendar: "🗓",
            spiral_notepad: "🗒",
            spoon: "🥄",
            squid: "🦑",
            stadium: "🏟",
            star: "⭐️",
            star2: "🌟",
            star_and_crescent: "☪️",
            star_of_david: "✡️",
            stars: "🌠",
            station: "🚉",
            statue_of_liberty: "🗽",
            steam_locomotive: "🚂",
            stew: "🍲",
            stop_button: "⏹",
            stop_sign: "🛑",
            stopwatch: "⏱",
            straight_ruler: "📏",
            strawberry: "🍓",
            stuck_out_tongue: "😛",
            stuck_out_tongue_closed_eyes: "😝",
            stuck_out_tongue_winking_eye: "😜",
            studio_microphone: "🎙",
            stuffed_flatbread: "🥙",
            sun_behind_large_cloud: "🌥",
            sun_behind_rain_cloud: "🌦",
            sun_behind_small_cloud: "🌤",
            sun_with_face: "🌞",
            sunflower: "🌻",
            sunglasses: "😎",
            sunny: "☀️",
            sunrise: "🌅",
            sunrise_over_mountains: "🌄",
            surfing_man: "🏄",
            surfing_woman: "🏄&zwj;♀️",
            sushi: "🍣",
            suspension_railway: "🚟",
            sweat: "😓",
            sweat_drops: "💦",
            sweat_smile: "😅",
            sweet_potato: "🍠",
            swimming_man: "🏊",
            swimming_woman: "🏊&zwj;♀️",
            symbols: "🔣",
            synagogue: "🕍",
            syringe: "💉",
            taco: "🌮",
            tada: "🎉",
            tanabata_tree: "🎋",
            taurus: "♉️",
            taxi: "🚕",
            tea: "🍵",
            telephone_receiver: "📞",
            telescope: "🔭",
            tennis: "🎾",
            tent: "⛺️",
            thermometer: "🌡",
            thinking: "🤔",
            thought_balloon: "💭",
            ticket: "🎫",
            tickets: "🎟",
            tiger: "🐯",
            tiger2: "🐅",
            timer_clock: "⏲",
            tipping_hand_man: "💁&zwj;♂️",
            tired_face: "😫",
            tm: "™️",
            toilet: "🚽",
            tokyo_tower: "🗼",
            tomato: "🍅",
            tongue: "👅",
            top: "🔝",
            tophat: "🎩",
            tornado: "🌪",
            trackball: "🖲",
            tractor: "🚜",
            traffic_light: "🚥",
            train: "🚋",
            train2: "🚆",
            tram: "🚊",
            triangular_flag_on_post: "🚩",
            triangular_ruler: "📐",
            trident: "🔱",
            triumph: "😤",
            trolleybus: "🚎",
            trophy: "🏆",
            tropical_drink: "🍹",
            tropical_fish: "🐠",
            truck: "🚚",
            trumpet: "🎺",
            tulip: "🌷",
            tumbler_glass: "🥃",
            turkey: "🦃",
            turtle: "🐢",
            tv: "📺",
            twisted_rightwards_arrows: "🔀",
            two_hearts: "💕",
            two_men_holding_hands: "👬",
            two_women_holding_hands: "👭",
            u5272: "🈹",
            u5408: "🈴",
            u55b6: "🈺",
            u6307: "🈯️",
            u6708: "🈷️",
            u6709: "🈶",
            u6e80: "🈵",
            u7121: "🈚️",
            u7533: "🈸",
            u7981: "🈲",
            u7a7a: "🈳",
            umbrella: "☔️",
            unamused: "😒",
            underage: "🔞",
            unicorn: "🦄",
            unlock: "🔓",
            up: "🆙",
            upside_down_face: "🙃",
            v: "✌️",
            vertical_traffic_light: "🚦",
            vhs: "📼",
            vibration_mode: "📳",
            video_camera: "📹",
            video_game: "🎮",
            violin: "🎻",
            virgo: "♍️",
            volcano: "🌋",
            volleyball: "🏐",
            vs: "🆚",
            vulcan_salute: "🖖",
            walking_man: "🚶",
            walking_woman: "🚶&zwj;♀️",
            waning_crescent_moon: "🌘",
            waning_gibbous_moon: "🌖",
            warning: "⚠️",
            wastebasket: "🗑",
            watch: "⌚️",
            water_buffalo: "🐃",
            watermelon: "🍉",
            wave: "👋",
            wavy_dash: "〰️",
            waxing_crescent_moon: "🌒",
            wc: "🚾",
            weary: "😩",
            wedding: "💒",
            weight_lifting_man: "🏋️",
            weight_lifting_woman: "🏋️&zwj;♀️",
            whale: "🐳",
            whale2: "🐋",
            wheel_of_dharma: "☸️",
            wheelchair: "♿️",
            white_check_mark: "✅",
            white_circle: "⚪️",
            white_flag: "🏳️",
            white_flower: "💮",
            white_large_square: "⬜️",
            white_medium_small_square: "◽️",
            white_medium_square: "◻️",
            white_small_square: "▫️",
            white_square_button: "🔳",
            wilted_flower: "🥀",
            wind_chime: "🎐",
            wind_face: "🌬",
            wine_glass: "🍷",
            wink: "😉",
            wolf: "🐺",
            woman: "👩",
            woman_artist: "👩&zwj;🎨",
            woman_astronaut: "👩&zwj;🚀",
            woman_cartwheeling: "🤸&zwj;♀️",
            woman_cook: "👩&zwj;🍳",
            woman_facepalming: "🤦&zwj;♀️",
            woman_factory_worker: "👩&zwj;🏭",
            woman_farmer: "👩&zwj;🌾",
            woman_firefighter: "👩&zwj;🚒",
            woman_health_worker: "👩&zwj;⚕️",
            woman_judge: "👩&zwj;⚖️",
            woman_juggling: "🤹&zwj;♀️",
            woman_mechanic: "👩&zwj;🔧",
            woman_office_worker: "👩&zwj;💼",
            woman_pilot: "👩&zwj;✈️",
            woman_playing_handball: "🤾&zwj;♀️",
            woman_playing_water_polo: "🤽&zwj;♀️",
            woman_scientist: "👩&zwj;🔬",
            woman_shrugging: "🤷&zwj;♀️",
            woman_singer: "👩&zwj;🎤",
            woman_student: "👩&zwj;🎓",
            woman_teacher: "👩&zwj;🏫",
            woman_technologist: "👩&zwj;💻",
            woman_with_turban: "👳&zwj;♀️",
            womans_clothes: "👚",
            womans_hat: "👒",
            women_wrestling: "🤼&zwj;♀️",
            womens: "🚺",
            world_map: "🗺",
            worried: "😟",
            wrench: "🔧",
            writing_hand: "✍️",
            x: "❌",
            yellow_heart: "💛",
            yen: "💴",
            yin_yang: "☯️",
            yum: "😋",
            zap: "⚡️",
            zipper_mouth_face: "🤐",
            zzz: "💤",
            octocat: '<img width="20" height="20" align="absmiddle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAOwUlEQVR42uVbCVyO6RbPmn0sw9gZS0aZO4y5GTEUE2ObxjZjrbHEJVy3sWS5pkaWxjLEkCVDSbSgFLdESaWSLIVUSIi4kvb9f895vi/zbbR+yZ339/tbnu99n/ec/3Oe85xznufV0CjDBaAdwZqwnzCJ0FXjHV70/i8J5oQDhCFV8cJdq1atwqxZs+Ds7Iz4+HhqwgXCLELNKlK6G2Ej4e6lS5ewZcsWzJgxA+fOnWNZFqvzxT1v3boF/qcsBg0ahP3796OwsJAFWKYuIqjfPoS9cXFxWL58Obp06SInh5aWFr//jjoJWLlu3TolAorRuXNn7Ny5k4W4Spgj81xrgj5hLmED4RDhlNRygglBhADCSakpWxFMCHoETUJTwrYHDx7A1NT0je9nPHz4kN/fXl0EeI0aNeqtAjB69+4NPz8/FsSdlXvy5An8/f1hZ2cHCwsLGBsbY/To0cJy9PT0MGDAAAwePBhGRkbClNesWYODBw8iODgYOTk53M/d9evXo27duiW++8iRI3z/ZHURENOjR48ShSjGuHHjhHJ16tQp9TOKaNWqlZKpvw1MHluQOpSvk5eXh5YtW5ZbmarAvHnzmIBd6iCgXnZ2Npo1a1atCWAfwY5SHQTUKCoqQocOHao1AebmHBJgi7p8QBDP6epMwKFDvMDAWF0ELLS1ta3WBNy9e5cJMFIXAdvt7e2rNQHDhw9nAv5D+KKylV9y8+bNCi1pVYWZM2cyCfaVTcDdsqzH7xpBQRxcwqyylLdi5/K+KM/Q0dFhAqIri4Bn1T0AUgVpdmhYUeVHnD59+r1TnjF27Fgm4HhFCThoYmLyXhLQoEGD4mRKsyIE3OrZs+d7SQCDCyZcNSqv8k1evXoFTU3NUr+wzUcfYqRBf8yb/C2WzfoBFoTF08fBdMIITDD8CsP1+kL30x7Q6dYZH7drjfZ0f4fWLdG1Q1t81qMLBvTRwejB/TBl1BDMnzQGS2dMxKo5k7Fs9iSY/jAaBvR8Pc26pZaH02quLZSXgO6xsbGlelGnli1wZKcVMqN8gKcRwItrf+K/VB95doXaLwOJIVSzOU/+2Re5kV7IuuyJrIhTyLt6mmztLBBPNZLHoUAy9fE8UvJ8ikxfj8PwJPQErJeYlkquTZs2MQFLykuANgc/Jb2kn3Z3ZMaQUrmxwO1zyAo7gfRAJ6RfOIyMEFdkXj5F8BTK5lzxQv610yi8QcFatI8gQoCIK7x+hojwRnaE5H4JTiEj9Pjr/rJDqcZyn9b4ovu45LYbdWvXeqtsXMHiSlZ5CegRExPz1hd83PYj5POo0QinXyLFg48hnZTOiQ1Dzr1IZEaeQRoJn0HKZIR7lA2kfHrQUerXHTlx4ZL+rnjjFRGRGeYB5MUj2GnbW+XbuJFrp1heXgI6JCYmvvUFN1x3Aek3SWkapRAXMeJFGS8ge2Xfuog0toaykED3Mpk8+shOk+sv68Y50V9WuKewBKt5094o39atW/mRf5WXgIYZGRlo3Lixys4nj6A6Z1YMcqRCpwU4ouDlUyHk/QA/hNttR25Wlvh/ZthJUsil9ATQ/axkYbqEzDgfL0Ts/x35+aLyTES7IY36Q6w/+Q4/tP6wuUoZ9+7dy7ebVmQZjO/atavKzn32rAdeXkd6KCkXdAxZ13yFcLFnvPD73zrDVrsdTs6eggKSuSjjORHkUGoC0i86Iyc6QPQX7eqMnTodYNuzHU4vnosiaitMSUSavwMy6d3IvEUrzViVMrq5uXEX4ytCgL++vr5Sx7Vr1cIDX0dKkQJfj37Rs3jw1sBxkwlwGD4Ax3+ciN1faCHW76xQRFgAOcjSEMBkIe0x8nLzcez7kTg8Rh/uxuOxR/cTJISFSfq7eATpZCk8CAfXLVFJwIULXHnHoIoQYLtw4UKljps2aogXQcQuef/XAiMDKY+S4DhyEFwpDnCj9f+Afl8EbbWRTANaAdihlYoAMn8aZzyNuYODX/eD29TvRH/7v+qN8H27JdOAyWQfQQ74xPafVRLAPox9WUlK6hIGEgx4f00Kg2JcvHhRqeP6FIwknXemyen/2gLIIeC/CYk49M0AuE4xgtu0sThg8AUCN62TEuBdRgJo2Y+Kxh9D/k59SQiwH9QHobt3SAk4KSGA4oWjm1YqyVi8U6Soj4yOrHM/jTAyKVby/PnzIoNi8L+L4eXlpXoFcLcTgc1rAlISkJeXDxeK2A6P1hdTwI6mQPTJE+WbAlnJyE7PhNO3Q3BkrKGYWtxfHMkkmQLO0ilwA7+vXqAkn66urtBLUZ9iHfm30NBQaPAf165dA0d9vP2UlJSEp0+f4vHjx3j06JH4e+rUqUovcNmyGkiNEkLwklXsBG+ecMUOnfbYod1emG5uboFKJ8jPFVD0l0dBUHqoPDHpQeQEb0qc4FUHe3KAbYUT9JgzDbwOFL5MfN0fXkXhJ5PxSvLt2LFD1Ah5u4z1YJ14l4qnBe8v3rhxAzz4PAVG8nLHivIP0dHRiIiIQGRkpEgmrl69ClW1QBMjQ7LDW8hmU+RRI69ckJIkhL7jfRJBm62R+TJVYq6h0jhBRslsivqenT2MF/7OyI70VmkFhWnPJaS6OyPkt43IycqR9EfWlH7JDQUUTuNhCHR7Ke9YcRp/5coVoQPrcvnyZURFRYmBZlLS0kR8MVLD29sbnp6e8PHxQUBAgCgn8YO8E3z79m3BGKeVc+bMkXuBZt06SA12F/F5Go0gR4C8HBalPZMPXKL8lQKhPAqF+f97KXFyNx6HQsoPsshJ/kmAp2TKkJLISpXvjyxNhMYcDVLOEO+lPDi8B5mamipkZx1YF9YpJCRErAy+vr5CZ9ZdWABhDGEYYTBhAOFz3g4nfMJelNCbkNCpUye5F034mvxIPi1/FM+zQCw0k5B9O0iEr5kRXkqhMJOVf9NXIHjtT7hmaymSoBzKETimkAuFpaF1dkwI9RcmIYaXv3BJXoGCuyIgk5WpefPmKCgoYK46SmX/RKoL69Sfl0WuFEl1HlmWJXE5z6WmTZvKJxxmxkIQ3AuU5APk6NICj4hRT6eITTEEzqWk55HHPjz3cxJhNF5cxeNT9kj2cRDTQjEkzpDtjyyCic5l5fEA7uSHFEefR5pPsahrb2B9QkICFHeJ51HunkdLIg0VLY0BFKdLwllVHp4dHyvst3QuEiiju21vA/+VZkiluIKt4I3RIfWXQ4QgKUxkni47LJWUP3PmjHo2RxVI+CebmKJP6EiFDVurxUgmExe5PHlnPAkn8w4QqW62NCVmYopozid5H0CI9RKE21ggJeAYEeMnfitOnRn5XCfgeJ+VTosWQU8MOc6ZE0cqnUm4fv165SrPBVHCfMI4TowUfmOfsIcdJh92kBWmUcP6GDt8EDZbzIffH5tx3/ewSFjw5LKk0MEFEkZenDBjgew7Yiog5brkt+QrknvJmhIp4Apw/A1bVpjhG/0v5d7Vrl07bNu2TelUSqUoz8uI3Z49OEtBAy+TdP1CqKtwHzvQUxxgTJs2TeX5gdq1a0ObSmCjh+jB+NuvRamL1+3ls77HCip1rTSdJP5eNnMizKndjMLoH42G4bthX+FzHS3UVVEC69evH3799VeKMXJZrlWKclUGAZ5jxoxB02ZNsNlxH74aagBHZyex986HlVTczyGmI58h4CjL2toa48ePFxsUPEotWrQoc0GT0/C2bduiY8eO4ISMcxLeoOFYhS6qm2EpoZG65jmbv+dPSyRZlt5QfVjvtX19AOFNL+aDFNI4m0eFc9Ho5ORkaGtrl5kAVp6DMOk88efEjLe++ZhclZwHTJHEHbs4YOCmLj2645fdvwnTK42zoXtaEHwNDQ3LXdZm5yad3/2r+gQmDsRnIF5KAldX6zdsgG/GG8F44Vzcu3eP2y1K6GPr2rVrK1zbnz59Or/LoaoJCPZ4kCZsjw9GECL79OmDj9q2wb+320C3/5fgPQO6Vrzh+fpcDqxXr16lbHBwgkZXm6okYJr0ECMrX5vraiJ1lArEjrEnzWuOqemiYj9spGd2ee478XkiPsJakmJ83qA05/8qXNurJFLiunXrhpo1a6LxB02wyHIFZpovgOHwYfjZ0hK2lH5u2rwZ5suWYv5ycyUlmjRpgl69eimlrFy3kwuoyOvXr19frm3RokVMwPZ3TYC57E6xVq+e6KzVDSaL/oEp82Zh8IhhWLjGAp/p9oX5ujVKBNjY2MDV1VWuzd3dXaTesm2biUQuZ8u28elSPmKr8a4vdog8GnJpcT1N1KHUuBbt0jSgWuGbzJh3mVhh2TYHBwdxjFa2jVcZnvPVlQBOLXdZWlqW2ZFxNYYVlm07fPgwAgMD5dr4OD5HeHLFFxM+O42DGtXhIkFaMQlcUjIzM0P37t1Ro0YNpZPjPJcVK7SOjo5ybU5OTqIAo0gAh97VlgAZIj4l8Pn4WFaO64ocuXG6zJtDbMqySnC7IgF8uptLVrJtq1evFuWqak+A4j4i4TNpltiJ8LPiNFFFwNGjRyWFyfedAFUny/joekkEuLi4KK0CfykCeFnkiu1flgBeFtl3/D8SsMbKykpOifv37ysRcPz4cVHKUiSA8wwNdR9/VTMBSh9Y8S4Nf2qnSICiBbDzVCRg9uzZTMC+94kAv6FDh8opwRsVHPjItnl4eEDxHNLKlStFXV+2javQ/M1SpZe+1KA4L4G7WDG57fSm/OUbXiqG0ewAFYOeYcN4fwZhvLkp2y4tftrxcltdlf/w+fPn4qNGxTCYU2m6nrRu3VqunT/EoiuZvw6TTZHpyuNNmEaNGsndP3fu3OJAq1N1JOAHDmyKheVtNP4OkE2crULRAW7fvl20EyyLy24a8p+/7WISFixYIMLt4t82bNhQYjXqXREgPq3j74mlX3AmSL8E1eOPIBXnuVT5OsVZpuLnOMeOHeN7vifwiYhYzhC5IpwlOXj1QXWdBmy/XWU/X+UqMZfKBw4cKAobHPlJlZe9h6tOu+7cuSN2dg0MDMSSyZUpmXvaSD+crq/xvl0k9BTCRa7qEPq+5T4t6ffF52WVV+f1P6zyLG30bsU4AAAAAElFTkSuQmCC">',
            showdown: '<img width="20" height="20" align="absmiddle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAECtaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMDEtMTVUMjE6MDE6MTlaPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNy0xMC0yNFQxMzozMTozMCswMTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTctMTAtMjRUMTM6MzE6MzArMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU+UyAtPC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5TIC08L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6N2NkMzQxNzctOWYyZi0yNDRiLWEyYjQtMzU1MzJkY2Y1MWJiPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2E1YzgxYmYtYjhiNy0xMWU3LTk0NDktYTQ2MzdlZjJkNjMzPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjBDNUFFNjVGNjlDRTQxMTk0NUE4NTVFM0JDQTdFRUI8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjBDNUFFNjVGNjlDRTQxMTk0NUE4NTVFM0JDQTdFRUI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMDEtMTVUMjE6MDE6MTlaPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ODZjNjBkMGQtOGY0Yy01ZTRlLWEwMjQtODI4ZWQyNTIwZDc3PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTEwLTI0VDEzOjMxOjMwKzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjdjZDM0MTc3LTlmMmYtMjQ0Yi1hMmI0LTM1NTMyZGNmNTFiYjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0xMC0yNFQxMzozMTozMCswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6ODZjNjBkMGQtOGY0Yy01ZTRlLWEwMjQtODI4ZWQyNTIwZDc3PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjYwQzVBRTY1RjY5Q0U0MTE5NDVBODU1RTNCQ0E3RUVCPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjBDNUFFNjVGNjlDRTQxMTk0NUE4NTVFM0JDQTdFRUI8L3N0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pse7bzcAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA1JJREFUeNrsm1+OmlAUhz+aeS9dwZggJn1AnRUMO6jpBgZXULuC2hWUWUGZBTSxKyiuoA4mfUBMnB04K5g+9DihRBHlyh/lJLwIXLgf99xzzu9etZeXFy7Z3nDh1gBoAFy4XeVtQNO0zNcapmUDfUBPnFoBfhQGq6IBaHmjwD4Ahmk5wAD4kKG5J8CNwsAFaHe6DvA9cc0wCgOv8gDka3vA9RHNPgo0D7hNnJtGYWBXxgV2dH4MfMnRRA+Y1WIO2NJ5F/ikoKm3tYsChmkNFHW+fmHQMC1dfHaXPQP3wM1yMdc2B/AOGALTWobBmI1Shu0UGCwX83XyRBQGawHntTtdG5gUNfxVu4CTNqNv6/wWGL7kCc+1AmCYVisl3I2ydD4GYZUCs7IjoLXrxHIx9w9tLAqDCfBwDrXAY457x+cAoCfuwRGjYFUnAGk+PsjR7s8Dn1VeLWCYVlpDw+VivjVHSHt+u9PVJbzGzZXQWTkAkz0V31fATUaEsjVJlQBs4FeGcteLgzgbAALBA+4y3voAeJL8nA0AHfClnM1qm1HhnYUidCSE+KzvSSJUTwAxCOMcpfETMFYpfRUKIAbCFhC3OTJJJwqDWS0BxED0JZ4Pjix1P2+E0loCSMBwyK4S/xc1ojBwag8gMU84cvTKGgmlAYhngu1O9xAXuVE5J1QCQCz3bwHuHvdQui5QKQAxEO6eEKpsFCgTRSXkvdoxSlBMCxhJJbgrrbZRtHCiShN0pRB6PeQ3ckBw2K0oKXMBVYJIP+Nvh9qulFivGoBt1lLQxowT2ykBXCfnhZIglgYACWmqXQv+baioBYCeiCQHm+QEg1O7RhF7hO4OhSAhcJKSFU7qBGADwZeqMMuXn6TUBw8qlaMrirNb4LdhWlP+SWD+cjFfxTpuS2GUpik+o3jFSEkqbJiWn0P0OMSGqlWiOu0TvD+FRHZKAE+oW+cfRmEwqlsesJJEJs8y91QqP+9UL6lqEtz2gpuNEY5sm9sIHln2DRa2aFKGJtiXkZEMiWtgVvRKUSUFkSKt2S7fAGgAXLYpmQQXf36MUChTZdUa2u8/rkvPA6Tz30r4eH3ybcBS5gJ6SaNXb+aABkA1AMxKenclBZLW/He4cYEGwEXb3wEASelexk6LIIIAAAAASUVORK5CYII=">'
        }, l.Converter = function(e) {
            "use strict";
            function t() {
                e = e || {};
                for (var t in C) C.hasOwnProperty(t) && (o[t] = C[t]);
                if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
                for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
                o.extensions && l.helper.forEach(o.extensions, r);
            }
            function r(e, t) {
                if (t = t || null, l.helper.isString(e)) {
                    if (e = l.helper.stdExtName(e), t = e, l.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), 
                    void n(l.extensions[e], e);
                    if (l.helper.isUndefined(g[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                    e = g[e];
                }
                "function" == typeof e && (e = e()), l.helper.isArray(e) || (e = [ e ]);
                var r = s(e, t);
                if (!r.valid) throw Error(r.error);
                for (var i = 0; i < e.length; ++i) {
                    switch (e[i].type) {
                      case "lang":
                        c.push(e[i]);
                        break;

                      case "output":
                        d.push(e[i]);
                    }
                    if (e[i].hasOwnProperty("listeners")) for (var o in e[i].listeners) e[i].listeners.hasOwnProperty(o) && a(o, e[i].listeners[o]);
                }
            }
            function n(e, t) {
                "function" == typeof e && (e = e(new l.Converter())), l.helper.isArray(e) || (e = [ e ]);
                var r = s(e, t);
                if (!r.valid) throw Error(r.error);
                for (var n = 0; n < e.length; ++n) switch (e[n].type) {
                  case "lang":
                    c.push(e[n]);
                    break;

                  case "output":
                    d.push(e[n]);
                    break;

                  default:
                    throw Error("Extension loader error: Type unrecognized!!!");
                }
            }
            function a(e, t) {
                if (!l.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
                if ("function" != typeof t) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof t + " given");
                p.hasOwnProperty(e) || (p[e] = []), p[e].push(t);
            }
            function i(e) {
                var t = e.match(/^\s*/)[0].length, r = new RegExp("^\\s{0," + t + "}", "gm");
                return e.replace(r, "");
            }
            var o = {}, c = [], d = [], p = {}, h = A, u = {
                parsed: {},
                raw: "",
                format: ""
            };
            t(), this._dispatch = function(e, t, r, n) {
                if (p.hasOwnProperty(e)) for (var a = 0; a < p[e].length; ++a) {
                    var i = p[e][a](e, t, this, r, n);
                    i && void 0 !== i && (t = i);
                }
                return t;
            }, this.listen = function(e, t) {
                return a(e, t), this;
            }, this.makeHtml = function(e) {
                if (!e) return e;
                var t = {
                    gHtmlBlocks: [],
                    gHtmlMdBlocks: [],
                    gHtmlSpans: [],
                    gUrls: {},
                    gTitles: {},
                    gDimensions: {},
                    gListLevel: 0,
                    hashLinkCounts: {},
                    langExtensions: c,
                    outputModifiers: d,
                    converter: this,
                    ghCodeBlocks: [],
                    metadata: {
                        parsed: {},
                        raw: "",
                        format: ""
                    }
                };
                return e = e.replace(/¨/g, "¨T"), e = e.replace(/\$/g, "¨D"), e = e.replace(/\r\n/g, "\n"), 
                e = e.replace(/\r/g, "\n"), e = e.replace(/\u00A0/g, " "), o.smartIndentationFix && (e = i(e)), 
                e = "\n\n" + e + "\n\n", e = l.subParser("detab")(e, o, t), e = e.replace(/^[ \t]+$/gm, ""), 
                l.helper.forEach(c, function(r) {
                    e = l.subParser("runExtension")(r, e, o, t);
                }), e = l.subParser("metadata")(e, o, t), e = l.subParser("hashPreCodeTags")(e, o, t), 
                e = l.subParser("githubCodeBlocks")(e, o, t), e = l.subParser("hashHTMLBlocks")(e, o, t), 
                e = l.subParser("hashCodeTags")(e, o, t), e = l.subParser("stripLinkDefinitions")(e, o, t), 
                e = l.subParser("blockGamut")(e, o, t), e = l.subParser("unhashHTMLSpans")(e, o, t), 
                e = l.subParser("unescapeSpecialChars")(e, o, t), e = e.replace(/¨D/g, "$$"), e = e.replace(/¨T/g, "¨"), 
                e = l.subParser("completeHTMLDocument")(e, o, t), l.helper.forEach(d, function(r) {
                    e = l.subParser("runExtension")(r, e, o, t);
                }), u = t.metadata, e;
            }, this.setOption = function(e, t) {
                o[e] = t;
            }, this.getOption = function(e) {
                return o[e];
            }, this.getOptions = function() {
                return o;
            }, this.addExtension = function(e, t) {
                t = t || null, r(e, t);
            }, this.useExtension = function(e) {
                r(e);
            }, this.setFlavor = function(e) {
                if (!I.hasOwnProperty(e)) throw Error(e + " flavor was not found");
                var t = I[e];
                h = e;
                for (var r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
            }, this.getFlavor = function() {
                return h;
            }, this.removeExtension = function(e) {
                l.helper.isArray(e) || (e = [ e ]);
                for (var t = 0; t < e.length; ++t) {
                    for (var r = e[t], n = 0; n < c.length; ++n) c[n] === r && c[n].splice(n, 1);
                    for (var a = 0; a < d.length; ++n) d[a] === r && d[a].splice(n, 1);
                }
            }, this.getAllExtensions = function() {
                return {
                    language: c,
                    output: d
                };
            }, this.getMetadata = function(e) {
                return e ? u.raw : u.parsed;
            }, this.getMetadataFormat = function() {
                return u.format;
            }, this._setMetadataPair = function(e, t) {
                u.parsed[e] = t;
            }, this._setMetadataFormat = function(e) {
                u.format = e;
            }, this._setMetadataRaw = function(e) {
                u.raw = e;
            };
        }, l.subParser("anchors", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("anchors.before", e, t, r);
            var n = function(e, n, a, i, s, o, c) {
                if (l.helper.isUndefined(c) && (c = ""), a = a.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) i = ""; else if (!i) {
                    if (a || (a = n.toLowerCase().replace(/ ?\n/g, " ")), i = "#" + a, l.helper.isUndefined(r.gUrls[a])) return e;
                    i = r.gUrls[a], l.helper.isUndefined(r.gTitles[a]) || (c = r.gTitles[a]);
                }
                i = i.replace(l.helper.regexes.asteriskDashAndColon, l.helper.escapeCharactersCallback);
                var g = '<a href="' + i + '"';
                return "" !== c && null !== c && (c = c.replace(/"/g, "&quot;"), c = c.replace(l.helper.regexes.asteriskDashAndColon, l.helper.escapeCharactersCallback), 
                g += ' title="' + c + '"'), t.openLinksInNewWindow && !/^#/.test(i) && (g += ' target="¨E95Eblank"'), 
                g += ">" + n + "</a>";
            };
            return e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, n), 
            e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n), 
            e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n), 
            e = e.replace(/\[([^\[\]]+)]()()()()()/g, n), t.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim, function(e, r, n, a, i) {
                if ("\\" === n) return r + a;
                if (!l.helper.isString(t.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
                var s = t.ghMentionsLink.replace(/\{u}/g, i), o = "";
                return t.openLinksInNewWindow && (o = ' target="¨E95Eblank"'), r + '<a href="' + s + '"' + o + ">" + a + "</a>";
            })), e = r.converter._dispatch("anchors.after", e, t, r);
        });
        var p = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, h = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, u = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, m = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim, f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, v = function(e) {
            "use strict";
            return function(t, r, n, a, i, s, o) {
                n = n.replace(l.helper.regexes.asteriskDashAndColon, l.helper.escapeCharactersCallback);
                var c = n, g = "", C = "", A = r || "", I = o || "";
                return /^www\./i.test(n) && (n = n.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && s && (g = s), 
                e.openLinksInNewWindow && (C = ' target="¨E95Eblank"'), A + '<a href="' + n + '"' + C + ">" + c + "</a>" + g + I;
            };
        }, b = function(e, t) {
            "use strict";
            return function(r, n, a) {
                var i = "mailto:";
                return n = n || "", a = l.subParser("unescapeSpecialChars")(a, e, t), e.encodeEmails ? (i = l.helper.encodeEmailAddress(i + a), 
                a = l.helper.encodeEmailAddress(a)) : i += a, n + '<a href="' + i + '">' + a + "</a>";
            };
        };
        l.subParser("autoLinks", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("autoLinks.before", e, t, r), e = e.replace(u, v(t)), 
            e = e.replace(f, b(t, r)), e = r.converter._dispatch("autoLinks.after", e, t, r);
        }), l.subParser("simplifiedAutoLinks", function(e, t, r) {
            "use strict";
            return t.simplifiedAutoLink ? (e = r.converter._dispatch("simplifiedAutoLinks.before", e, t, r), 
            e = t.excludeTrailingPunctuationFromURLs ? e.replace(h, v(t)) : e.replace(p, v(t)), 
            e = e.replace(m, b(t, r)), e = r.converter._dispatch("simplifiedAutoLinks.after", e, t, r)) : e;
        }), l.subParser("blockGamut", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("blockGamut.before", e, t, r), e = l.subParser("blockQuotes")(e, t, r), 
            e = l.subParser("headers")(e, t, r), e = l.subParser("horizontalRule")(e, t, r), 
            e = l.subParser("lists")(e, t, r), e = l.subParser("codeBlocks")(e, t, r), e = l.subParser("tables")(e, t, r), 
            e = l.subParser("hashHTMLBlocks")(e, t, r), e = l.subParser("paragraphs")(e, t, r), 
            e = r.converter._dispatch("blockGamut.after", e, t, r);
        }), l.subParser("blockQuotes", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("blockQuotes.before", e, t, r), e += "\n\n";
            var n = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
            return t.splitAdjacentBlockquotes && (n = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(n, function(e) {
                return e = e.replace(/^[ \t]*>[ \t]?/gm, ""), e = e.replace(/¨0/g, ""), e = e.replace(/^[ \t]+$/gm, ""), 
                e = l.subParser("githubCodeBlocks")(e, t, r), e = l.subParser("blockGamut")(e, t, r), 
                e = e.replace(/(^|\n)/g, "$1  "), e = e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, t) {
                    var r = t;
                    return r = r.replace(/^  /gm, "¨0"), r = r.replace(/¨0/g, "");
                }), l.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", t, r);
            }), e = r.converter._dispatch("blockQuotes.after", e, t, r);
        }), l.subParser("codeBlocks", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("codeBlocks.before", e, t, r), e += "¨0";
            var n = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
            return e = e.replace(n, function(e, n, a) {
                var i = n, s = a, o = "\n";
                return i = l.subParser("outdent")(i, t, r), i = l.subParser("encodeCode")(i, t, r), 
                i = l.subParser("detab")(i, t, r), i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), 
                t.omitExtraWLInCodeBlocks && (o = ""), i = "<pre><code>" + i + o + "</code></pre>", 
                l.subParser("hashBlock")(i, t, r) + s;
            }), e = e.replace(/¨0/, ""), e = r.converter._dispatch("codeBlocks.after", e, t, r);
        }), l.subParser("codeSpans", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("codeSpans.before", e, t, r), void 0 === e && (e = ""), 
            e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, n, a, i) {
                var s = i;
                return s = s.replace(/^([ \t]*)/g, ""), s = s.replace(/[ \t]*$/g, ""), s = l.subParser("encodeCode")(s, t, r), 
                s = n + "<code>" + s + "</code>", s = l.subParser("hashHTMLSpans")(s, t, r);
            }), e = r.converter._dispatch("codeSpans.after", e, t, r);
        }), l.subParser("completeHTMLDocument", function(e, t, r) {
            "use strict";
            if (!t.completeHTMLDocument) return e;
            e = r.converter._dispatch("completeHTMLDocument.before", e, t, r);
            var n = "html", a = "<!DOCTYPE HTML>\n", i = "", s = '<meta charset="utf-8">\n', o = "", l = "";
            void 0 !== r.metadata.parsed.doctype && (a = "<!DOCTYPE " + r.metadata.parsed.doctype + ">\n", 
            "html" !== (n = r.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== n || (s = '<meta charset="utf-8">'));
            for (var c in r.metadata.parsed) if (r.metadata.parsed.hasOwnProperty(c)) switch (c.toLowerCase()) {
              case "doctype":
                break;

              case "title":
                i = "<title>" + r.metadata.parsed.title + "</title>\n";
                break;

              case "charset":
                s = "html" === n || "html5" === n ? '<meta charset="' + r.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + r.metadata.parsed.charset + '">\n';
                break;

              case "language":
              case "lang":
                o = ' lang="' + r.metadata.parsed[c] + '"', l += '<meta name="' + c + '" content="' + r.metadata.parsed[c] + '">\n';
                break;

              default:
                l += '<meta name="' + c + '" content="' + r.metadata.parsed[c] + '">\n';
            }
            return e = a + "<html" + o + ">\n<head>\n" + i + s + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", 
            e = r.converter._dispatch("completeHTMLDocument.after", e, t, r);
        }), l.subParser("detab", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("detab.before", e, t, r), e = e.replace(/\t(?=\t)/g, "    "), 
            e = e.replace(/\t/g, "¨A¨B"), e = e.replace(/¨B(.+?)¨A/g, function(e, t) {
                for (var r = t, n = 4 - r.length % 4, a = 0; a < n; a++) r += " ";
                return r;
            }), e = e.replace(/¨A/g, "    "), e = e.replace(/¨B/g, ""), e = r.converter._dispatch("detab.after", e, t, r);
        }), l.subParser("ellipsis", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("ellipsis.before", e, t, r), e = e.replace(/\.\.\./g, "…"), 
            e = r.converter._dispatch("ellipsis.after", e, t, r);
        }), l.subParser("emoji", function(e, t, r) {
            "use strict";
            if (!t.emoji) return e;
            e = r.converter._dispatch("emoji.before", e, t, r);
            var n = /:([\S]+?):/g;
            return e = e.replace(n, function(e, t) {
                return l.helper.emojis.hasOwnProperty(t) ? l.helper.emojis[t] : e;
            }), e = r.converter._dispatch("emoji.after", e, t, r);
        }), l.subParser("encodeAmpsAndAngles", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("encodeAmpsAndAngles.before", e, t, r), e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), 
            e = e.replace(/<(?![a-z\/?$!])/gi, "&lt;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), 
            e = r.converter._dispatch("encodeAmpsAndAngles.after", e, t, r);
        }), l.subParser("encodeBackslashEscapes", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("encodeBackslashEscapes.before", e, t, r), e = e.replace(/\\(\\)/g, l.helper.escapeCharactersCallback), 
            e = e.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, l.helper.escapeCharactersCallback), 
            e = r.converter._dispatch("encodeBackslashEscapes.after", e, t, r);
        }), l.subParser("encodeCode", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("encodeCode.before", e, t, r), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, l.helper.escapeCharactersCallback), 
            e = r.converter._dispatch("encodeCode.after", e, t, r);
        }), l.subParser("escapeSpecialCharsWithinTagAttributes", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, t, r);
            var n = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, a = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
            return e = e.replace(n, function(e) {
                return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, l.helper.escapeCharactersCallback);
            }), e = e.replace(a, function(e) {
                return e.replace(/([\\`*_~=|])/g, l.helper.escapeCharactersCallback);
            }), e = r.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, t, r);
        }), l.subParser("githubCodeBlocks", function(e, t, r) {
            "use strict";
            return t.ghCodeBlocks ? (e = r.converter._dispatch("githubCodeBlocks.before", e, t, r), 
            e += "¨0", e = e.replace(/(?:^|\n)(```+|~~~+)([^\s`~]*)\n([\s\S]*?)\n\1/g, function(e, n, a, i) {
                var s = t.omitExtraWLInCodeBlocks ? "" : "\n";
                return i = l.subParser("encodeCode")(i, t, r), i = l.subParser("detab")(i, t, r), 
                i = i.replace(/^\n+/g, ""), i = i.replace(/\n+$/g, ""), i = "<pre><code" + (a ? ' class="' + a + " language-" + a + '"' : "") + ">" + i + s + "</code></pre>", 
                i = l.subParser("hashBlock")(i, t, r), "\n\n¨G" + (r.ghCodeBlocks.push({
                    text: e,
                    codeblock: i
                }) - 1) + "G\n\n";
            }), e = e.replace(/¨0/, ""), r.converter._dispatch("githubCodeBlocks.after", e, t, r)) : e;
        }), l.subParser("hashBlock", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("hashBlock.before", e, t, r), e = e.replace(/(^\n+|\n+$)/g, ""), 
            e = "\n\n¨K" + (r.gHtmlBlocks.push(e) - 1) + "K\n\n", e = r.converter._dispatch("hashBlock.after", e, t, r);
        }), l.subParser("hashCodeTags", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("hashCodeTags.before", e, t, r);
            var n = function(e, n, a, i) {
                var s = a + l.subParser("encodeCode")(n, t, r) + i;
                return "¨C" + (r.gHtmlSpans.push(s) - 1) + "C";
            };
            return e = l.helper.replaceRecursiveRegExp(e, n, "<code\\b[^>]*>", "</code>", "gim"), 
            e = r.converter._dispatch("hashCodeTags.after", e, t, r);
        }), l.subParser("hashElement", function(e, t, r) {
            "use strict";
            return function(e, t) {
                var n = t;
                return n = n.replace(/\n\n/g, "\n"), n = n.replace(/^\n/, ""), n = n.replace(/\n+$/g, ""), 
                n = "\n\n¨K" + (r.gHtmlBlocks.push(n) - 1) + "K\n\n";
            };
        }), l.subParser("hashHTMLBlocks", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("hashHTMLBlocks.before", e, t, r);
            var n = [ "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p" ], a = function(e, t, n, a) {
                var i = e;
                return -1 !== n.search(/\bmarkdown\b/) && (i = n + r.converter.makeHtml(t) + a), 
                "\n\n¨K" + (r.gHtmlBlocks.push(i) - 1) + "K\n\n";
            };
            t.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(e, t) {
                return "&lt;" + t + "&gt;";
            }));
            for (var i = 0; i < n.length; ++i) for (var s, o = new RegExp("^ {0,3}(<" + n[i] + "\\b[^>]*>)", "im"), c = "<" + n[i] + "\\b[^>]*>", g = "</" + n[i] + ">"; -1 !== (s = l.helper.regexIndexOf(e, o)); ) {
                var C = l.helper.splitAtIndex(e, s), A = l.helper.replaceRecursiveRegExp(C[1], a, c, g, "im");
                if (A === C[1]) break;
                e = C[0].concat(A);
            }
            return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, l.subParser("hashElement")(e, t, r)), 
            e = l.helper.replaceRecursiveRegExp(e, function(e) {
                return "\n\n¨K" + (r.gHtmlBlocks.push(e) - 1) + "K\n\n";
            }, "^ {0,3}\x3c!--", "--\x3e", "gm"), e = e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, l.subParser("hashElement")(e, t, r)), 
            e = r.converter._dispatch("hashHTMLBlocks.after", e, t, r);
        }), l.subParser("hashHTMLSpans", function(e, t, r) {
            "use strict";
            function n(e) {
                return "¨C" + (r.gHtmlSpans.push(e) - 1) + "C";
            }
            return e = r.converter._dispatch("hashHTMLSpans.before", e, t, r), e = e.replace(/<[^>]+?\/>/gi, function(e) {
                return n(e);
            }), e = e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(e) {
                return n(e);
            }), e = e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(e) {
                return n(e);
            }), e = e.replace(/<[^>]+?>/gi, function(e) {
                return n(e);
            }), e = r.converter._dispatch("hashHTMLSpans.after", e, t, r);
        }), l.subParser("unhashHTMLSpans", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("unhashHTMLSpans.before", e, t, r);
            for (var n = 0; n < r.gHtmlSpans.length; ++n) {
                for (var a = r.gHtmlSpans[n], i = 0; /¨C(\d+)C/.test(a); ) {
                    var s = RegExp.$1;
                    if (a = a.replace("¨C" + s + "C", r.gHtmlSpans[s]), 10 === i) {
                        console.error("maximum nesting of 10 spans reached!!!");
                        break;
                    }
                    ++i;
                }
                e = e.replace("¨C" + n + "C", a);
            }
            return e = r.converter._dispatch("unhashHTMLSpans.after", e, t, r);
        }), l.subParser("hashPreCodeTags", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("hashPreCodeTags.before", e, t, r);
            var n = function(e, n, a, i) {
                var s = a + l.subParser("encodeCode")(n, t, r) + i;
                return "\n\n¨G" + (r.ghCodeBlocks.push({
                    text: e,
                    codeblock: s
                }) - 1) + "G\n\n";
            };
            return e = l.helper.replaceRecursiveRegExp(e, n, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), 
            e = r.converter._dispatch("hashPreCodeTags.after", e, t, r);
        }), l.subParser("headers", function(e, t, r) {
            "use strict";
            function n(e) {
                var n, a;
                if (t.customizedHeaderId) {
                    var i = e.match(/\{([^{]+?)}\s*$/);
                    i && i[1] && (e = i[1]);
                }
                return n = e, a = l.helper.isString(t.prefixHeaderId) ? t.prefixHeaderId : !0 === t.prefixHeaderId ? "section-" : "", 
                t.rawPrefixHeaderId || (n = a + n), n = t.ghCompatibleHeaderId ? n.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : t.rawHeaderId ? n.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : n.replace(/[^\w]/g, "").toLowerCase(), 
                t.rawPrefixHeaderId && (n = a + n), r.hashLinkCounts[n] ? n = n + "-" + r.hashLinkCounts[n]++ : r.hashLinkCounts[n] = 1, 
                n;
            }
            e = r.converter._dispatch("headers.before", e, t, r);
            var a = isNaN(parseInt(t.headerLevelStart)) ? 1 : parseInt(t.headerLevelStart), i = t.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, s = t.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            e = e.replace(i, function(e, i) {
                var s = l.subParser("spanGamut")(i, t, r), o = t.noHeaderId ? "" : ' id="' + n(i) + '"', c = a, g = "<h" + c + o + ">" + s + "</h" + c + ">";
                return l.subParser("hashBlock")(g, t, r);
            }), e = e.replace(s, function(e, i) {
                var s = l.subParser("spanGamut")(i, t, r), o = t.noHeaderId ? "" : ' id="' + n(i) + '"', c = a + 1, g = "<h" + c + o + ">" + s + "</h" + c + ">";
                return l.subParser("hashBlock")(g, t, r);
            });
            var o = t.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
            return e = e.replace(o, function(e, i, s) {
                var o = s;
                t.customizedHeaderId && (o = s.replace(/\s?\{([^{]+?)}\s*$/, ""));
                var c = l.subParser("spanGamut")(o, t, r), g = t.noHeaderId ? "" : ' id="' + n(s) + '"', C = a - 1 + i.length, A = "<h" + C + g + ">" + c + "</h" + C + ">";
                return l.subParser("hashBlock")(A, t, r);
            }), e = r.converter._dispatch("headers.after", e, t, r);
        }), l.subParser("horizontalRule", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("horizontalRule.before", e, t, r);
            var n = l.subParser("hashBlock")("<hr />", t, r);
            return e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, n), e = e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, n), 
            e = e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, n), e = r.converter._dispatch("horizontalRule.after", e, t, r);
        }), l.subParser("images", function(e, t, r) {
            "use strict";
            function n(e, t, r, n, i, s, o, l) {
                return n = n.replace(/\s/g, ""), a(e, t, r, n, i, s, o, l);
            }
            function a(e, t, n, a, i, s, o, c) {
                var g = r.gUrls, C = r.gTitles, A = r.gDimensions;
                if (n = n.toLowerCase(), c || (c = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) a = ""; else if ("" === a || null === a) {
                    if ("" !== n && null !== n || (n = t.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + n, 
                    l.helper.isUndefined(g[n])) return e;
                    a = g[n], l.helper.isUndefined(C[n]) || (c = C[n]), l.helper.isUndefined(A[n]) || (i = A[n].width, 
                    s = A[n].height);
                }
                t = t.replace(/"/g, "&quot;").replace(l.helper.regexes.asteriskDashAndColon, l.helper.escapeCharactersCallback), 
                a = a.replace(l.helper.regexes.asteriskDashAndColon, l.helper.escapeCharactersCallback);
                var I = '<img src="' + a + '" alt="' + t + '"';
                return c && (c = c.replace(/"/g, "&quot;").replace(l.helper.regexes.asteriskDashAndColon, l.helper.escapeCharactersCallback), 
                I += ' title="' + c + '"'), i && s && (i = "*" === i ? "auto" : i, s = "*" === s ? "auto" : s, 
                I += ' width="' + i + '"', I += ' height="' + s + '"'), I += " />";
            }
            e = r.converter._dispatch("images.before", e, t, r);
            var i = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, s = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, o = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+\/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, c = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, g = /!\[([^\[\]]+)]()()()()()/g;
            return e = e.replace(c, a), e = e.replace(o, n), e = e.replace(s, a), e = e.replace(i, a), 
            e = e.replace(g, a), e = r.converter._dispatch("images.after", e, t, r);
        }), l.subParser("italicsAndBold", function(e, t, r) {
            "use strict";
            function n(e, t, r) {
                return t + e + r;
            }
            return e = r.converter._dispatch("italicsAndBold.before", e, t, r), t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*)___\b/g, function(e, t) {
                return n(t, "<strong><em>", "</em></strong>");
            }), e = e.replace(/\b__(\S[\s\S]*)__\b/g, function(e, t) {
                return n(t, "<strong>", "</strong>");
            }), e = e.replace(/\b_(\S[\s\S]*?)_\b/g, function(e, t) {
                return n(t, "<em>", "</em>");
            })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, t) {
                return /\S$/.test(t) ? n(t, "<strong><em>", "</em></strong>") : e;
            }), e = e.replace(/__(\S[\s\S]*?)__/g, function(e, t) {
                return /\S$/.test(t) ? n(t, "<strong>", "</strong>") : e;
            }), e = e.replace(/_([^\s_][\s\S]*?)_/g, function(e, t) {
                return /\S$/.test(t) ? n(t, "<em>", "</em>") : e;
            })), t.literalMidWordAsterisks ? (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]+?)\*\*\*\B(?!\*)/g, function(e, t, r) {
                return n(r, t + "<strong><em>", "</em></strong>");
            }), e = e.replace(/([^*]|^)\B\*\*(\S[\s\S]+?)\*\*\B(?!\*)/g, function(e, t, r) {
                return n(r, t + "<strong>", "</strong>");
            }), e = e.replace(/([^*]|^)\B\*(\S[\s\S]+?)\*\B(?!\*)/g, function(e, t, r) {
                return n(r, t + "<em>", "</em>");
            })) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(e, t) {
                return /\S$/.test(t) ? n(t, "<strong><em>", "</em></strong>") : e;
            }), e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(e, t) {
                return /\S$/.test(t) ? n(t, "<strong>", "</strong>") : e;
            }), e = e.replace(/\*([^\s*][\s\S]*?)\*/g, function(e, t) {
                return /\S$/.test(t) ? n(t, "<em>", "</em>") : e;
            })), e = r.converter._dispatch("italicsAndBold.after", e, t, r);
        }), l.subParser("lists", function(e, t, r) {
            "use strict";
            function n(e, n) {
                r.gListLevel++, e = e.replace(/\n{2,}$/, "\n"), e += "¨0";
                var a = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, i = /\n[ \t]*\n(?!¨0)/.test(e);
                return t.disableForced4SpacesIndentedSublists && (a = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), 
                e = e.replace(a, function(e, n, a, s, o, c, g) {
                    g = g && "" !== g.trim();
                    var C = l.subParser("outdent")(o, t, r), A = "";
                    return c && t.tasklists && (A = ' class="task-list-item" style="list-style-type: none;"', 
                    C = C.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        return g && (e += " checked"), e += ">";
                    })), C = C.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(e) {
                        return "¨A" + e;
                    }), n || C.search(/\n{2,}/) > -1 ? (C = l.subParser("githubCodeBlocks")(C, t, r), 
                    C = l.subParser("blockGamut")(C, t, r)) : (C = l.subParser("lists")(C, t, r), C = C.replace(/\n$/, ""), 
                    C = l.subParser("hashHTMLBlocks")(C, t, r), C = C.replace(/\n\n+/g, "\n\n"), C = i ? l.subParser("paragraphs")(C, t, r) : l.subParser("spanGamut")(C, t, r)), 
                    C = C.replace("¨A", ""), C = "<li" + A + ">" + C + "</li>\n";
                }), e = e.replace(/¨0/g, ""), r.gListLevel--, n && (e = e.replace(/\s+$/, "")), 
                e;
            }
            function a(e, t) {
                if ("ol" === t) {
                    var r = e.match(/^ *(\d+)\./);
                    if (r && "1" !== r[1]) return ' start="' + r[1] + '"';
                }
                return "";
            }
            function i(e, r, i) {
                var s = t.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, o = t.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, l = "ul" === r ? s : o, c = "";
                if (-1 !== e.search(l)) !function t(g) {
                    var C = g.search(l), A = a(e, r);
                    -1 !== C ? (c += "\n\n<" + r + A + ">\n" + n(g.slice(0, C), !!i) + "</" + r + ">\n", 
                    r = "ul" === r ? "ol" : "ul", l = "ul" === r ? s : o, t(g.slice(C))) : c += "\n\n<" + r + A + ">\n" + n(g, !!i) + "</" + r + ">\n";
                }(e); else {
                    var g = a(e, r);
                    c = "\n\n<" + r + g + ">\n" + n(e, !!i) + "</" + r + ">\n";
                }
                return c;
            }
            return e = r.converter._dispatch("lists.before", e, t, r), e += "¨0", e = r.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, t, r) {
                return i(t, r.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
            }) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, t, r, n) {
                return i(r, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !1);
            }), e = e.replace(/¨0/, ""), e = r.converter._dispatch("lists.after", e, t, r);
        }), l.subParser("metadata", function(e, t, r) {
            "use strict";
            function n(e) {
                r.metadata.raw = e, e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), e = e.replace(/\n {4}/g, " "), 
                e.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(e, t, n) {
                    return r.metadata.parsed[t] = n, "";
                });
            }
            return t.metadata ? (e = r.converter._dispatch("metadata.before", e, t, r), e = e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(e, t, r) {
                return n(r), "¨M";
            }), e = e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(e, t, a) {
                return t && (r.metadata.format = t), n(a), "¨M";
            }), e = e.replace(/¨M/g, ""), e = r.converter._dispatch("metadata.after", e, t, r)) : e;
        }), l.subParser("outdent", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("outdent.before", e, t, r), e = e.replace(/^(\t|[ ]{1,4})/gm, "¨0"), 
            e = e.replace(/¨0/g, ""), e = r.converter._dispatch("outdent.after", e, t, r);
        }), l.subParser("paragraphs", function(e, t, r) {
            "use strict";
            e = r.converter._dispatch("paragraphs.before", e, t, r), e = e.replace(/^\n+/g, ""), 
            e = e.replace(/\n+$/g, "");
            for (var n = e.split(/\n{2,}/g), a = [], i = n.length, s = 0; s < i; s++) {
                var o = n[s];
                o.search(/¨(K|G)(\d+)\1/g) >= 0 ? a.push(o) : o.search(/\S/) >= 0 && (o = l.subParser("spanGamut")(o, t, r), 
                o = o.replace(/^([ \t]*)/g, "<p>"), o += "</p>", a.push(o));
            }
            for (i = a.length, s = 0; s < i; s++) {
                for (var c = "", g = a[s], C = !1; /¨(K|G)(\d+)\1/.test(g); ) {
                    var A = RegExp.$1, I = RegExp.$2;
                    c = "K" === A ? r.gHtmlBlocks[I] : C ? l.subParser("encodeCode")(r.ghCodeBlocks[I].text, t, r) : r.ghCodeBlocks[I].codeblock, 
                    c = c.replace(/\$/g, "$$$$"), g = g.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(g) && (C = !0);
                }
                a[s] = g;
            }
            return e = a.join("\n"), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), 
            r.converter._dispatch("paragraphs.after", e, t, r);
        }), l.subParser("runExtension", function(e, t, r, n) {
            "use strict";
            if (e.filter) t = e.filter(t, n.converter, r); else if (e.regex) {
                var a = e.regex;
                a instanceof RegExp || (a = new RegExp(a, "g")), t = t.replace(a, e.replace);
            }
            return t;
        }), l.subParser("spanGamut", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("spanGamut.before", e, t, r), e = l.subParser("codeSpans")(e, t, r), 
            e = l.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, r), e = l.subParser("encodeBackslashEscapes")(e, t, r), 
            e = l.subParser("images")(e, t, r), e = l.subParser("anchors")(e, t, r), e = l.subParser("autoLinks")(e, t, r), 
            e = l.subParser("simplifiedAutoLinks")(e, t, r), e = l.subParser("emoji")(e, t, r), 
            e = l.subParser("underline")(e, t, r), e = l.subParser("italicsAndBold")(e, t, r), 
            e = l.subParser("strikethrough")(e, t, r), e = l.subParser("ellipsis")(e, t, r), 
            e = l.subParser("hashHTMLSpans")(e, t, r), e = l.subParser("encodeAmpsAndAngles")(e, t, r), 
            t.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), 
            e = r.converter._dispatch("spanGamut.after", e, t, r);
        }), l.subParser("strikethrough", function(e, t, r) {
            "use strict";
            function n(e) {
                return t.simplifiedAutoLink && (e = l.subParser("simplifiedAutoLinks")(e, t, r)), 
                "<del>" + e + "</del>";
            }
            return t.strikethrough && (e = r.converter._dispatch("strikethrough.before", e, t, r), 
            e = e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(e, t) {
                return n(t);
            }), e = r.converter._dispatch("strikethrough.after", e, t, r)), e;
        }), l.subParser("stripLinkDefinitions", function(e, t, r) {
            "use strict";
            var n = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, a = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+\/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
            e += "¨0";
            var i = function(e, n, a, i, s, o, c) {
                return n = n.toLowerCase(), a.match(/^data:.+?\/.+?;base64,/) ? r.gUrls[n] = a.replace(/\s/g, "") : r.gUrls[n] = l.subParser("encodeAmpsAndAngles")(a, t, r), 
                o ? o + c : (c && (r.gTitles[n] = c.replace(/"|'/g, "&quot;")), t.parseImgDimensions && i && s && (r.gDimensions[n] = {
                    width: i,
                    height: s
                }), "");
            };
            return e = e.replace(a, i), e = e.replace(n, i), e = e.replace(/¨0/, "");
        }), l.subParser("tables", function(e, t, r) {
            "use strict";
            function n(e) {
                return /^:[ \t]*--*$/.test(e) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(e) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(e) ? ' style="text-align:center;"' : "";
            }
            function a(e, n) {
                var a = "";
                return e = e.trim(), (t.tablesHeaderId || t.tableHeaderId) && (a = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), 
                e = l.subParser("spanGamut")(e, t, r), "<th" + a + n + ">" + e + "</th>\n";
            }
            function i(e, n) {
                return "<td" + n + ">" + l.subParser("spanGamut")(e, t, r) + "</td>\n";
            }
            function s(e, t) {
                for (var r = "<table>\n<thead>\n<tr>\n", n = e.length, a = 0; a < n; ++a) r += e[a];
                for (r += "</tr>\n</thead>\n<tbody>\n", a = 0; a < t.length; ++a) {
                    r += "<tr>\n";
                    for (var i = 0; i < n; ++i) r += t[a][i];
                    r += "</tr>\n";
                }
                return r += "</tbody>\n</table>\n";
            }
            function o(e) {
                var o, c = e.split("\n");
                for (o = 0; o < c.length; ++o) /^ {0,3}\|/.test(c[o]) && (c[o] = c[o].replace(/^ {0,3}\|/, "")), 
                /\|[ \t]*$/.test(c[o]) && (c[o] = c[o].replace(/\|[ \t]*$/, "")), c[o] = l.subParser("codeSpans")(c[o], t, r);
                var g = c[0].split("|").map(function(e) {
                    return e.trim();
                }), C = c[1].split("|").map(function(e) {
                    return e.trim();
                }), A = [], I = [], d = [], p = [];
                for (c.shift(), c.shift(), o = 0; o < c.length; ++o) "" !== c[o].trim() && A.push(c[o].split("|").map(function(e) {
                    return e.trim();
                }));
                if (g.length < C.length) return e;
                for (o = 0; o < C.length; ++o) d.push(n(C[o]));
                for (o = 0; o < g.length; ++o) l.helper.isUndefined(d[o]) && (d[o] = ""), I.push(a(g[o], d[o]));
                for (o = 0; o < A.length; ++o) {
                    for (var h = [], u = 0; u < I.length; ++u) l.helper.isUndefined(A[o][u]), h.push(i(A[o][u], d[u]));
                    p.push(h);
                }
                return s(I, p);
            }
            if (!t.tables) return e;
            var c = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, g = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
            return e = r.converter._dispatch("tables.before", e, t, r), e = e.replace(/\\(\|)/g, l.helper.escapeCharactersCallback), 
            e = e.replace(c, o), e = e.replace(g, o), e = r.converter._dispatch("tables.after", e, t, r);
        }), l.subParser("underline", function(e, t, r) {
            "use strict";
            return t.underline ? (e = r.converter._dispatch("underline.before", e, t, r), e = t.literalMidWordUnderscores ? e.replace(/\b_?__(\S[\s\S]*)___?\b/g, function(e, t) {
                return "<u>" + t + "</u>";
            }) : e.replace(/_?__(\S[\s\S]*?)___?/g, function(e, t) {
                return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
            }), e = e.replace(/(_)/g, l.helper.escapeCharactersCallback), e = r.converter._dispatch("underline.after", e, t, r)) : e;
        }), l.subParser("unescapeSpecialChars", function(e, t, r) {
            "use strict";
            return e = r.converter._dispatch("unescapeSpecialChars.before", e, t, r), e = e.replace(/¨E(\d+)E/g, function(e, t) {
                var r = parseInt(t);
                return String.fromCharCode(r);
            }), e = r.converter._dispatch("unescapeSpecialChars.after", e, t, r);
        });
        void 0 !== (n = function() {
            "use strict";
            return l;
        }.call(t, r, t, e)) && (e.exports = n);
    }).call(this);
}, function(e, t) {
    e.exports = URI;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1);
    r(3), r(36);
    var a = r(37), i = r(38), s = r(39), o = r(40), l = r(24), c = r(25), g = r(41), C = r(26), A = r(27), I = r(28), d = r(29), p = r(30), h = r(31), u = r(32), m = r(33), f = r(34), v = r(35), b = r(42), y = r(23);
    t.webCatalog = "webCatalog", n.module(t.webCatalog, [ "patternfly", "ngAnimate", "ui.bootstrap", "angularMoment", "ui.select", "schemaForm" ]).service("BuilderAppService", o.BuilderAppService).service("Catalog", g.CatalogService).service("RecentlyViewedServiceItems", b.RecentlyViewedServiceItems).filter("escapeRegExp", a.escapeRegExpFilter).filter("projectUrl", i.projectUrlFilter).filter("secretUrl", s.secretUrlFilter).component("catalogParameters", l.catalogParameters).component("catalogSearch", c.catalogSearch).component("createFromBuilder", C.createFromBuilder).component("landingPage", A.landingPage).component("orderService", I.orderService).component("overlayPanel", d.overlayPanel).component("projectsSummary", p.projectsSummary).component("saasList", h.saasList).component("selectPlan", u.selectPlan).component("selectProject", m.selectProject).component("servicesView", f.servicesView).component("updateService", v.updateService).component("catalogFilter", y.catalogFilter).run([ "$templateCache", function(e) {
        e.put("catalog-search/catalog-search-result.html", r(4)), e.put("create-from-builder/create-from-builder-info.html", r(7)), 
        e.put("create-from-builder/create-from-builder-configure.html", r(6)), e.put("create-from-builder/create-from-builder-bind.html", r(5)), 
        e.put("create-from-builder/create-from-builder-results.html", r(8)), e.put("order-service/order-service-info.html", r(12)), 
        e.put("order-service/order-service-plans.html", r(13)), e.put("order-service/order-service-configure.html", r(11)), 
        e.put("order-service/order-service-bind.html", r(10)), e.put("order-service/order-service-bind-parameters.html", r(9)), 
        e.put("order-service/order-service-results.html", r(14)), e.put("update-service/update-service-plans.html", r(16)), 
        e.put("update-service/update-service-configure.html", r(15)), e.put("update-service/update-service-results.html", r(17)), 
        e.put("decorators/bootstrap/array.html", r(18)), e.put("decorators/bootstrap/checkbox.html", r(19)), 
        e.put("decorators/bootstrap/checkboxes.html", r(20)), e.put("decorators/bootstrap/default.html", r(21)), 
        e.put("decorators/bootstrap/select.html", r(22));
    } ]);
} ], [ 71 ]);