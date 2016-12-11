// Element creation and manipulation
(function(d) {
    'use strict';

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
        },

        removeElement: function(parent, element) {
            parent.removeChild(element);
        }
    };

    /* Dynamic element creation and event attaching
    -------------------------------------------- */
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


    
    /* Dynamic element attribute attaching and removal
    ----------------------------------------------- */    
    var deletor = d.querySelector('.remove-list'),
        deletee = list,
        deleteeParent = listParent;

    deletor.setAttribute('id', 'remove-list');

    var deletor = d.querySelector('#remove-list');

    deletor.addEventListener('click', LIB.removeElement.bind(null, deleteeParent, deletee));
})(document);
