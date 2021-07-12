// ===================Задача по снятию ограничений ОВР===============================
//
// const dauHandler = (workDaysCalendar) => workDaysCalendar.filter(async (i) => {
//   return delete i.workingDaysInMonth
// })
// console.log(dauHandler(workDaysCalendar))
//
// ===================Задача по снятию ограничений ОВР===============================

// ===================lodash вывод ключа===============================
// const contractDriverFull = filteredVehicles.find(vehicle => vehicle.id === this.props.selected)
// const contractResult = omitBy(contractDriverFull, (value, key) => !key.startsWith('contractDriverFullName'))
// const contractResultName = values(contractResult)
// ===================lodash вывод ключа===============================

// =====================redux return=======================================
// export default connect((state: AppState, props: Props) => {
//     console.log(parseInt(props.locationId, 10))
//     return (
//         {
//             locationId: parseInt(props.locationId, 10),
//             employeeBranchOrgUnitId: state.auth.profile.employeeBranchOrgUnitId
//         }
//     )
// })(withUserAccess(WaypointPicker));
// =====================redux return=======================================

// =====================debounce==========================================

// delayHandlerPhoneNumber = debounce(() =>{
//     return this.props.updateOrder(this.props.order);
// }, 2000);
//
// handleOnChangePhoneNumber = (e) => {
//     const { value } = e.target;
//     this.props.order.contractDriverPhoneNumber = e.target.value;
//     this.setState({ contractDriverPhoneNumber: value });
//     this.delayHandlerPhoneNumber(value)
// };

// =====================debounce==========================================