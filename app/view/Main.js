Ext.define('SampleApp1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    // todo: check if it's good practice to have p tags in these strings.
                    "<h1>Sample App 1</h1>",
                    "<p>SampleApp1 is an app to learn how to develop with Sencha Touch.</p>",
                    "<p>The initial setup is is on the <a href=http://docs.sencha.com/touch/2.2.0/#!/guide/getting_started>Getting Started</a> with Sencha Touch page.</p>",
                    "<p>The sample app itself starts on the <a href=http://docs.sencha.com/touch/2.2.0/#!/guide/first_app>first app tutorial</a> page.</p>"
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
