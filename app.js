const data = [
	['Abraham Pollen Archives and Rare Book Library', 'https://masseyeandear.org/education/library-resources', 'Massachusetts Eye and Ear Infirmary', '243 Charles Street, Boston, MA 02114', ['Archive or Special Collection']],
	['Archdiocese of Boston Archive Department', 'https://masseyeandear.org/education/library-resources', 'Roman Catholic Archdiocese of Boston', '66 Brooks Drive Braintree, MA 02184', ['Archive or Special Collection']],
	['Arnold Arboretum Library and Archives', 'https://masseyeandear.org/education/library-resources', 'Harvard University', '125 Arborway Boston, MA 02130', ['Archive or Special Collection']],
	['Berklee Archives and Special Collections', 'https://masseyeandear.org/education/library-resources', 'Berklee College of Music, Boston Conservatory', '150 Massachusetts Ave., Boston, MA 02115', ['Archive or Special Collection']],
	['Boston African American National Historical Site', 'https://masseyeandear.org/education/library-resources', 'National Park Service', '15 State Street Boston MA 02109', ['Historic Building/Museum']],
	['Boston Athenaeum', 'https://masseyeandear.org/education/library-resources', '', '10 1/2 Beacon Street, Boston, MA 02108', ['Archive or Special Collection']],
	['Boston Family History', 'https://masseyeandear.org/education/library-resources', '', '', ['Digital Resource']],
	['Boston Harbor Islands National and State Park', 'https://masseyeandear.org/education/library-resources', 'National Park Service', '21 Second Ave Charlestown MA 02129', ['Historic Building/Museum']],
	['Boston History Database', 'https://masseyeandear.org/education/library-resources', 'Jim Vrabel', '', ['Digital Resource']],
	['Boston National Historical Park', 'https://masseyeandear.org/education/library-resources', 'National Park Service', '21 Second Ave Charlestown MA 02129', ['Historic Building/Museum']],
	['Boston Neighborhood Network', 'https://masseyeandear.org/education/library-resources', '', '3025 Washington Street, Boston, MA 02119', ['News']],
	['Boston Planning and Development Agency (Planning Department) Archives', 'https://masseyeandear.org/education/library-resources', 'City of Boston', '201 Rivermoor Street, West Roxbury, MA 02132', ['Archive or Special Collection']],
	['Boston Symphony Orchestra Archives', 'https://masseyeandear.org/education/library-resources', '', '301 Massachusetts Avenue, Boston, MA 02115', ['Archive or Special Collection']],
	['Boston Tea Party Museum', 'https://masseyeandear.org/education/library-resources', '', '306 Congress Street, Boston, MA 02210', ['Historic Building/Museum']],
	['Boston Public Library', 'https://masseyeandear.org/education/library-resources', 'City of Boston', '700 Boylston Street, Boston, MA 02116', ['Archive or Special Collection', 'Historic Building/Museum']],
	['Brighton/Allston Heritage Museum', 'https://masseyeandear.org/education/library-resources', '', '20 Chestnut Hill Ave., Boston, MA 02135', ['Historic Building/Museum']],
	['Center for the History of Medicine, Countway Library', 'https://masseyeandear.org/education/library-resources', 'Harvard Medical School', '10 Shattuck St, Boston, MA 02115', ['Archive or Special Collection']],
	['Chinese Historical Society of New England', 'https://masseyeandear.org/education/library-resources', '', '2 Boylston St, G-6, Boston, MA', ['Historical Society']],
	['City Archaeology Program', 'https://masseyeandear.org/education/library-resources', 'City of Boston', '201 Rivermoor Street Boston, MA 02134', ['Objects & Artifacts']],
	['City of Boston Archives', 'https://masseyeandear.org/education/library-resources', 'City of Boston', '201 Rivermoor Street, Boston, MA 02132', ['Archive or Special Collection']],
	['Colonial Society of Massachusetts', 'https://masseyeandear.org/education/library-resources', '', '87 Mt. Vernon Street, Boston, MA 02108', ['History Holder']],
	['Commonwealth Museum', 'https://masseyeandear.org/education/library-resources', 'Massachusetts Archives', '220 Morrissey Boulevard, Boston, MA 02125', ['Archive or Special Collection']],
	['Congregational Library & Archives', 'https://masseyeandear.org/education/library-resources', '', '14 Beacon Street, #206, Boston, MA 02108', ['Archive or Special Collection']],
	['Dorchester Historical Society', 'https://masseyeandear.org/education/library-resources', '', '195 Boston Street, Boston, MA 02125', ['Historical Society']],
]

const table = new DataTable('table', {
	info: false,
	paging: false,
	responsive: true,
	columns: [
		{
			title: 'Name',
			width: '25%',
			className: 'notranslate',
			responsivePriority: 1
		},
		{
			title: 'Link',
			width: '15%',
			className: 'notranslate test',
			orderable: false,
			searchable: false,
			render: function (data) {
				return `<a href="${data}" target="_blank">Link (${new URL(data).hostname})<svg class="external-icon" aria-hidden="true"><use href="#external-link"></use></svg></a>`
			}
		},
		{
			title: 'Affiliation',
			width: '20%',
			className: 'notranslate',
		},
		{
			title: 'Full Address',
			width: '20%',
			className: 'notranslate',
			orderable: false
		},
		{
			title: 'CollectionType',
			width: '20%',
			responsivePriority: 2,
			render: function (data) {
				data = data.map(t => `<span class="${t.toLowerCase().replace(/(\s+|\/|&)/g,'-')}">${t}</span>`)
				
				return `<div class="collection-type">${data.join('')}</div>`
			}
		},
	],
	data
})

table.ready(() => {
	const select = document.createElement('select')
	select.append(new Option('All Collection Types', ''))

	const column = table.column(3)

	const data = column.data(), allData = []
	data.each(d => {
		allData.push(...d)
	})
	const uniqueData = Array.from(new Set(allData))

	for (const option of uniqueData) {
		select.append(new Option(option, option))
	}

	select.addEventListener('change', () => {
		const val = select.value
		column.search(val).draw()
	})

	const label = document.createElement('label')
	label.textContent = 'Filter by CollectionType:'
	label.appendChild(select)

	const wrapper = table.containers()[0]
	const filterDiv = wrapper.querySelector('.dt-layout-row .dt-layout-start')
	filterDiv.appendChild(label)
})