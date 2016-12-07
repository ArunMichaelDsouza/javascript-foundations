// Element creation and manipulation
(function(d) {
    'use strict';

    /* Dynamic element creation and event attaching
    -------------------------------------------- */
    var LIB = {
        createElement: function(element) {
            var el = d.createElement(element.type);
            el.innerText = element.text;
            Object.keys(element.styles).forEach(function(property) {
                el.style[property] = element.styles[property];
            });

            return el;
        },
        insertAfter: function(newNode, baseNode) {
            baseNode.parentNode.insertBefore(newNode, baseNode.nextSibling);
        }
    };


    var button = {
    	type: 'button',
    	text: 'Dynamic button',
    	styles: {
    		backgroundColor: '#50a4e2',
    		color: '#fff',
            border: 'none',
            padding: '5px 8px',
            borderRadius: '4px'
    	}
    }

    var dynamicButton = LIB.createElement(button),
        list = d.querySelector('.list');

    LIB.insertAfter(dynamicButton, list);
})(document);
