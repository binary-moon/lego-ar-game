var Button2devent = pc.createScript('button2devent');

Button2devent.attributes.add('Settings', {
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
            name: 'AlertLogging',
            title: 'Alert logging',
            type: 'boolean',
            default: false,
        },
        {
            name: 'FireEvent',
            title: 'Fire Event',
            type: 'string',
        },
        {
            name: 'IsLocalEvent',
            title: 'Is Local Event',
            type: 'boolean',
            default: false,
        },
    ]
});

// initialize code called once per entity
Button2devent.prototype.initialize = function() {
    this.entity.button.on('click', function() {
        if(this.Settings.AlertLogging){
            alert("Button clicked!");
        }
        if(this.Settings.IsLocalEvent){
            this.entity.fire(this.Settings.FireEvent);
        } else {
            this.app.fire(this.Settings.FireEvent);
        }
    }, this);
};