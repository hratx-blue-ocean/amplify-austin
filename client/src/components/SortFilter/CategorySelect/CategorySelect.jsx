import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// export default class Tags extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       defaultValues: null,
//     }
//   }

//   componentDidMount() {
//     console.log('mounter')
//     let defaultValues = [];
//     if (this.props.filteredCategories) {
//       this.props.categories.forEach(category => {
//         if (this.props.filteredCategories.includes(category)) {
//           defaultValues.push({ title: `${category.charAt(0).toUpperCase()}${category.slice(1)}` });
//         }
//       });
//     }
//     this.setState({ defaultValues }, this.forceUpdate())
//   }


//   render() {
//     if (!this.state.defaultValues) {
//       return <div></div>
//     } else {
//       console.log(this.state.defaultValues)
//       return (
//         <div style={{ width: "100%" }}>
//           <Autocomplete
//             style={{ margin: "0" }}
//             multiple
//             id="tags-standard"
//             options={this.props.categories.map(category => {
//               return { title: `${category.charAt(0).toUpperCase()}${category.slice(1)}` };
//             })}
//             getOptionLabel={option => option.title}
//             defaultValue={this.state.defaultValues}
//             onChange={(event, value) => { this.props.selectCategories(value) }}
//             renderInput={params => (
//               <TextField
//                 {...params}
//                 variant="standard"
//                 label="Category: "
//                 placeholder="Select a category to sort by..."
//                 margin="normal"
//                 fullWidth
//               />
//             )}
//           />
//         </div>
//       )
//     }
//   }
// }

const Tags = props => {
  let defaultValues = [];
  if (props.filteredCategories) {
    props.categories.forEach(category => {
      if (props.filteredCategories.includes(category)) {
        defaultValues.push({ title: `${category.charAt(0).toUpperCase()}${category.slice(1)}` });
      }
    });
  }
  console.log('---default values...again...', defaultValues);
  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        style={{ margin: "0" }}
        multiple
        id="tags-standard"
        options={props.categories.map(category => {
          return { title: category };
        })}
        getOptionLabel={option => `${option.title.charAt(0).toUpperCase()}${option.title.slice(1)}`}
        getOptionDisabled={option => props.filteredCategories.includes(option.title)}
        defaultValue={defaultValues}
        onChange={(event, value) => { props.selectCategories(value) }}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Category: "
            placeholder="Filter by..."
            margin="normal"
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default Tags;
