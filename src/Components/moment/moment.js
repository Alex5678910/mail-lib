import React from 'react';
import moment from "moment";

const Moment = () => {

    moment.updateLocale('ru', {week: {dow: 1}})

    return (
        <div>
            {
                moment().format('MM-DD-YYYY')
            }
            <br/>
            {
                moment().format('DD MM YYYY hh:mm:ss')
            }
            <br/>
            {
                moment().format('gggg')
            }
            <br/>
            {
                moment().format('LL')
            }
            <br/>
            {
                <input type="datetime-local" />
            }
            <br/>
            {
                moment().dayOfYear()
            }
            <br/>
            {
                moment().month() + 4
            }
            <br/>
            {
                moment().isoWeeksInYear()
            }
            <br/>
            {
                moment().get('date')
            }
            <br/>
            {
                moment([2008, 0, 29]).fromNow()
            }
            <br/>
            {
                moment([2010, 0, 29]).toNow()
            }
            <br/>
            {

            }
        </div>
    );
};

export default Moment;
