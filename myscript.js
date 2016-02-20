//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bBuzzFeed\b/g, "BullShit.org");
	v = v.replace(/\bDonald J. Trump\b/g, "Tom M. Riddle");
	v = v.replace(/\bTrump’s\b/g, "Voldie’s");
	v = v.replace(/\bTrump\b/g, "You-Know-Who");
	v = v.replace(/\bDonald John Trump\b/g, "Tom Marvolo Riddle");
	v = v.replace(/\b#Trump2016\b/g, "#Voldemort2016");

	textNode.nodeValue = v;
}