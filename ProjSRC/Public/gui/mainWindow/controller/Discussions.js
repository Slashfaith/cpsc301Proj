/**
 * Created by JetBrains WebStorm.
 * User: Brennan Jones
 * Date: 23/03/12
 * Time: 6:37 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('GUI.controller.Discussions', {
    extend: 'Ext.app.Controller',

    stores: [
        'Discussions'
    ],

    views: [
        'discussions.DiscussionsPanel',
        'discussions.PostThreadWindow'
    ],

    init: function() {
        this.control({
            'discussionspanel button[action=newthread]': {
                click: this.showNewThreadWindow
            },

            'postthreadwindow button[action=submitthread]': {
                click: this.submitThread
            }
        });
    },

    showNewThreadWindow: function () {
        var view = Ext.widget('postthreadwindow');
        view.down('postthreadwindow');

        var node = Ext.getCmp('discussionstree').getSelectionModel().getLastSelected();
        if (node == null)
            var path = '';
        else if (node.isLeaf())
            var path = node.parentNode.getPath('text');
        else
            var path = node.getPath('text')
        Ext.getCmp('post_thread_topic').setValue(path);
    },

    submitThread: function() {
        var tree = Ext.getCmp('discussionstree');

        var root = tree.getRootNode();

        var parent = root.appendChild({
            text: 'Parent 1'
        });

        parent.appendChild({
            text: 'Child 3',
            leaf: true
        });

        parent.expand();
    }
});