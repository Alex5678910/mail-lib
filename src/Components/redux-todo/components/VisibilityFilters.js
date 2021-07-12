import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";


const VisibilityFilters = ({ ActiveFilter, setFilter }) => { //Приходит (mapStateToProps,{ setFilter })

    const VisibilityFilters = {
        ALL: "Все",
        COMPLETED: "Закончил",
        INCOMPLETE: "Осталось"
    }

    return (
        <>
        <div className="visibility-filters">
            {Object.keys(VisibilityFilters).map(el => {
                return (
                    <span
                        key={`visibility-filter-${VisibilityFilters[el]}`}
                        className={cx("filter", VisibilityFilters[el] === ActiveFilter && "filter--active")}
                        onClick={() => {setFilter(VisibilityFilters[el])}}
                    >
            {VisibilityFilters[el]}
          </span>
                );
            })}
        </div>
    <div>
    </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        ActiveFilter: state.visibilityFilter,
        byIds: state.todoGreen.byIds,
    };
};
const mapDispatchToProps = () => {
    return { setFilter }
}

export default connect(mapStateToProps, mapDispatchToProps())(VisibilityFilters);// const VisibilityFilters = ({ activeFilter, setFilter })
// export default connect(mapStateToProps, { setFilter })(VisibilityFilters);  - равнозначно
