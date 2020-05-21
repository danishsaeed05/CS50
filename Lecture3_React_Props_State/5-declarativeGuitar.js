const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
  return(
  		<Guitar>
  		// equivelent of: function(node) { <String note = {note} }
  		{<strings.map(note => <String note={note} />)}
  		</Guitar>
  	)
}
