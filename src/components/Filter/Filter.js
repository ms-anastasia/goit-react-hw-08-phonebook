import React from "react";
import PropTypes from "prop-types";
import { FilterContent, FilterContainer } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import * as contactActions from "../../redux/actions";
import selectors from "../../redux/selectors";
import {
  TextField,
} from "@mui/material";

const Filter = () => {
  const value = useSelector((state) => selectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <FilterContainer>
    <FilterContent>
      <TextField
        type="text"
          value={value}
          fullWidth
          label="Search contacts by name"
        onChange={(e) =>
          dispatch(contactActions.contactSearch(e.currentTarget.value))
        }
          />
      </FilterContent>
    </FilterContainer>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
