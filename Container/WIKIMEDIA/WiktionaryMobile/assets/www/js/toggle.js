/*global document, window */
/*jslint sloppy: true, white:true, maxerr: 50, indent: 4, plusplus: true*/
MobileFrontend.toggle = (function() {
	var u = MobileFrontend.utils;

	function init() {
		var i, a, heading, btns,
			sectionHeadings = u( '.section_heading' );

		// TODO: remove in future - currently enables toggling in Wikipedia Mobile App v < 1.1
		window.wm_toggle_section = wm_toggle_section;
		btns = u( '.section_heading button' );
		for( i = 0; i < btns.length; i++ ) {
			u( btns[i] ).remove();
		}

		function openSectionHandler() {
			var sectionNumber = this.id ? this.id.split( '_' )[1] : -1;
			if( sectionNumber > -1 ) {
				wm_toggle_section( sectionNumber );
			}
		}
		function createButton( visible ) {
			var btn, label;
			btn = document.createElement( 'button' );
			label = document.createTextNode( MobileFrontend.message( visible ? 'expand-section' : 'collapse-section' ) );
			btn.className = visible ? 'show' : 'hide';
			btn.appendChild( label );
			btn.style.display = visible ? 'inline-block' : 'none';
			return btn;
		}
		if(!sectionHeadings) {
			sectionHeadings = [];
		} else {
			u( document.body ).addClass( 'togglingEnabled' );
		}
		for( i = 0; i < sectionHeadings.length; i++ ) {
			heading = sectionHeadings[i];
			heading.removeAttribute( 'onclick' ); // TODO: remove any legacy onclick handlers
			heading.insertBefore( createButton( true ), heading.firstChild );
			heading.insertBefore( createButton( false ), heading.firstChild );
			u( heading ).bind( 'click', openSectionHandler );
		}
		
		function checkHash() {
			var hash = this.hash || document.location.hash;
			if ( hash.indexOf( '#' ) === 0 ) {
				wm_reveal_for_hash( hash );
			}
		}
		checkHash();
		for ( a = document.getElementsByTagName( 'a' ), i = 0; i < a.length; i++ ) {
			u( a[i] ).bind( 'click', checkHash );
		}
	}

	function wm_reveal_for_hash( hash ) {
		var targetel = document.getElementById( hash.substr(1) ),
			p, section_idx;
		if ( targetel ) {
			p = targetel;
			while ( p && p.className !== 'content_block' &&
				p.className !== 'section_heading' ) {
				p = p.parentNode;
			}
			if ( p && p.style.display !== 'block' ) {
				section_idx = parseInt( p.id.split( '_' )[1], 10 );
				wm_toggle_section( section_idx );
			}
		}
	}

	function wm_toggle_section( section_id ) {
		var b = document.getElementById( 'section_' + section_id ),
			bb = b.getElementsByTagName( 'button' ), i, s, e;
		for ( i = 0; i <= 1; i++ ) {
			s = bb[i].style;
			s.display = s.display === 'none' || ( i && !s.display ) ? 'inline-block' : 'none';
		}
		for ( i = 0, d = ['content_','anchor_']; i<=1; i++ ) {
			e = document.getElementById( d[i] + section_id );
			if ( e ) {
				e.style.display = e.style.display === 'block' ? 'none' : 'block';
			}
		}
	}

	init();
	return {
		wm_reveal_for_hash: wm_reveal_for_hash,
		wm_toggle_section: wm_toggle_section,
		init: init
	};

})();
