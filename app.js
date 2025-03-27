const data = [
	['Abraham Pollen Archives and Rare Book Library', 'Massachusetts Eye and Ear Infirmary', '243 Charles Street, Boston, MA 02114', 'Archive or Special Collection'],
	['Archdiocese of Boston Archive Department', 'Roman Catholic Archdiocese of Boston', '66 Brooks Drive Braintree, MA 02184', 'Archive or Special Collection'],
	['Arnold Arboretum Library and Archives', 'Harvard University', '125 Arborway Boston, MA 02130', 'Archive or Special Collection'],
	['Berklee Archives and Special Collections', 'Berklee College of Music, Boston Conservatory', '150 Massachusetts Ave., Boston, MA 02115', 'Archive or Special Collection'],
	['Boston African American National Historical Site', 'National Park Service', '15 State Street Boston MA 02109', 'Historic Building/Museum'],
	['Boston Athenaeum', '', '10 1/2 Beacon Street, Boston, MA 02108', 'Archive or Special Collection'],
	['Boston Family History', '', '', 'Digital Resource'],
	['Boston Harbor Islands National and State Park', 'National Park Service', '21 Second Ave Charlestown MA 02129', 'Historic Building/Museum'],
	['Boston History Database', 'Jim Vrabel', '', 'Digital Resource'],
	['Boston National Historical Park', 'National Park Service', '21 Second Ave Charlestown MA 02129', 'Historic Building/Museum'],
	['Boston Neighborhood Network', '', '3025 Washington Street, Boston, MA 02119', 'News'],
	['Boston Planning and Development Agency (Planning Department) Archives', 'City of Boston', '201 Rivermoor Street, West Roxbury, MA 02132', 'Archive or Special Collection'],
	['Boston Symphony Orchestra Archives', '', '301 Massachusetts Avenue, Boston, MA 02115', 'Archive or Special Collection'],
	['Boston Tea Party Museum', '', '306 Congress Street, Boston, MA 02210', 'Historic Building/Museum'],
	['Boston Public Library', 'City of Boston', '700 Boylston Street, Boston, MA 02116', 'Archive or Special Collection, Historic Building/Museum'],
	['Brighton/Allston Heritage Museum', '', '20 Chestnut Hill Ave., Boston, MA 02135', 'Historic Building/Museum'],
	['Center for the History of Medicine, Countway Library', 'Harvard Medical School', '10 Shattuck St, Boston, MA 02115', 'Archive or Special Collection'],
	['Chinese Historical Society of New England', '', '2 Boylston St, G-6, Boston, MA', 'Historical Society'],
	['City Archaeology Program', 'City of Boston', '201 Rivermoor Street Boston, MA 02134', 'Objects & Artifacts'],
	['City of Boston Archives', 'City of Boston', '201 Rivermoor Street, Boston, MA 02132', 'Archive or Special Collection'],
	['Colonial Society of Massachusetts', '', '87 Mt. Vernon Street, Boston, MA 02108', 'History Holder'],
	['Commonwealth Museum', 'Massachusetts Archives', '220 Morrissey Boulevard, Boston, MA 02125', 'Archive or Special Collection'],
	['Congregational Library & Archives', '', '14 Beacon Street, #206, Boston, MA 02108', 'Archive or Special Collection'],
	['Dorchester Historical Society', '', '195 Boston Street, Boston, MA 02125', 'Historical Society'],
]

const table = new DataTable('table', {
	info: false,
	paging: false,
	autoWidth: false,
	columns: [
		{
			title: 'Name',
			width: '40%'
		},
		{
			title: 'Affiliation',
			width: '20%'
		},
		{
			title: 'Full Address',
			width: '20%',
			orderable: false
		},
		{
			title: 'CollectionType',
			width: '20%'
		},
	],
	data
})

console.log(table)