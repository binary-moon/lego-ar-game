var EntitySetEnable = pc.createScript('entitySetEnable');

EntitySetEnable.attributes.add('Settings', {
    type: 'json',
    schema: 
    [
        {
            name: 'ConsoleLogging',
            title: 'Console logging',
            type: 'boolean',
            default: false,
        },
        {
            name: 'ReceiveEvent',
            title: 'Receive Event',
            type: 'string',
        },
        {
            name: 'IsLocalEvent',
            title: 'Is Local Event',
            type: 'boolean',
            default: false,
        },
        {
            name: 'EntitiesToEffect',
            title: 'Entities To Effect',
            type: 'entity',
            array: true,
        },
        {
            name: 'Delay',
            title: 'Delay',
            type: 'number',
            default: 0, 
        },
        {
            name: 'EnabledState',
            title: 'Enabled State To Set',
            type: 'string',
            enum: 
            [
                { Enable: 'Enable' },
                { Disable: 'Disable' },
                { Toggle: 'Toggle' }
            ],

            default: 'Disable',
        },
    ]
});

// initialize code called once per entity
EntitySetEnable.prototype.initialize = function () {

    if (this.Settings.IsLocalEvent) {
        this.entity.on(this.Settings.ReceiveEvent, this.setEntityEnableState, this);
    } else {
        this.app.on(this.Settings.ReceiveEvent, this.setEntityEnableState, this)
    }

};

EntitySetEnable.prototype.setEntityEnableState = function () {
    var self = this; // Reference to use inside setTimeout
    setTimeout(function() { // Delay execution
        if (self.Settings.EntitiesToEffect.length > 0) {
            for (var i = 0; i < self.Settings.EntitiesToEffect.length; i++) {
                setEnableState(self.Settings.EnabledState, self.Settings.EntitiesToEffect[i]);
            }

        } else {
            setEnableState(self.Settings.EnabledState, self.entity);
        }
    }, this.DelayInSeconds * 1000); // Convert seconds to milliseconds for setTimeout

    function setEnableState(state, ent) {
        switch (state) {
            case 'Enable':
                ent.enabled = true;
                break;
            case 'Disable':
                ent.enabled = false;
                break;
            case 'Toggle':
                ent.enabled = !ent.enabled;
                break;
            default:
        }
    }
};
