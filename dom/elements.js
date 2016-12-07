// Element creation and manipulation
(function(d) {
    'use strict';

    /* Dynamic element creation and event attaching
    -------------------------------------------- */
    var LIB = {
        createElement: function(element) {
            var el = d.createElement(element.type);
            el.innerText = element.text;

            try {
                Object.keys(element.styles).forEach(function(property) {
                    el.style[property] = element.styles[property];
                });
            }
            catch(err) {
                return el;
            }

            return el;
        },
        insertAfter: function(newNode, baseNode) {
            return baseNode.parentNode.insertBefore(newNode, baseNode.nextSibling);
        }
    };


    var button1 = {
    	type: 'button',
    	text: 'Styled',
    	styles: {
    		backgroundColor: '#50a4e2',
    		color: '#fff',
            border: 'none',
            padding: '5px 8px',
            borderRadius: '4px'
    	}
    }

    var styledButton = LIB.createElement(button1),
        list = d.querySelector('.list');

    LIB.insertAfter(styledButton, list);

    var listParent = list.parentNode,
        button2 = {
            type: 'button',
            text: 'Simple'
        };  
    
    var simpleButton = LIB.createElement(button2);
    listParent.insertBefore(simpleButton, list);
})(document);
