import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "../index";
import { fetchActivities } from "../reducers/activities";
import { fetchDays } from "../reducers/days";
import AddDaysForm from "./days/AddDaysForm";
import Schedule from "./days/Schedule";
import HeaderBar from "./header/HeaderBar";
import { connect } from "react-redux";

// This is a functional component (using hooks). It's significantly simpler than the Class components method. You can see both here for demo purposes. To swap which is in use, change the `export default` from one to the other.
export default function FunctionalDashboard() {
  let dispatch = useDispatch();

  let [isShowingForm, setShowingForm] = useState(false);

  useEffect(() => {
    dispatch(fetchDays());
    dispatch(fetchActivities());
  }, [dispatch]);

  let days = useSelector((state) => state.days);

  return (
    <div>
      <HeaderBar
        headline="Dashboard"
        mainButton="Add a New Day"
        onButtonClick={() => {
          setShowingForm(!isShowingForm);
        }}
      />
      {isShowingForm ? (
        <AddDaysForm onSave={() => setShowingForm(false)} />
      ) : null}
      {days.map((day) => (
        <Schedule key={day.id} day={day} />
      ))}
    </div>
  );
}

// This is the same thing, but using a class-based component instead of a functional component. It's here for demo purposes, it is not currently in use.

// The reason I'm using a function instead of a const is for being able to use it with TypeScript more easily, it has no effect otherwise (because we're not using `this` in it).

/**
 * @param {import("../reducers").AppState} state
 */
function mapStateToProps(state) {
  return { days: state.days };
}

/**
 * @param {import("..").AppDispatch} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchDays: () => dispatch(fetchDays()),
    fetchActivities: () => dispatch(fetchActivities()),
  };
}

class DashboardComponent extends React.Component {
  state = {
    isShowingForm: false,
  };

  componentDidMount() {
    this.props.fetchDays();
    this.props.fetchActivities();
  }

  render() {
    return (
      <div>
        <HeaderBar
          headline="Dashboard"
          mainButton="Add a New Day"
          onButtonClick={() => {
            this.setState({ isShowingForm: !this.state.isShowingForm });
          }}
        />
        {this.state.isShowingForm ? (
          <AddDaysForm onSave={() => this.setState({ isShowingForm: false })} />
        ) : null}
        {
          /** @type {any} */ (this.props).days.map((/** @type {any} */ day) => (
            <Schedule key={day.id} day={day} />
          ))
        }
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
