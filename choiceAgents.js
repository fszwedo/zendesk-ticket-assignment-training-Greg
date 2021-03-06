export function choiceAgents(data) {

    const list = data.list;
    const hour = data.hour;
    let agents = [];

    list.forEach(element => {
        let names = Object.getOwnPropertyNames(element);
        for (let i = 1; i < names.length; i++) {
            let hours = element[names[i]];
            let hoursFT = hoursFromTo(hours);
            let hourFrom = hoursFT.from;
            let hourTo = hoursFT.to;

            if (hourFrom <= hour && (hourTo > hour)) {
                agents.push(names[i]);
            }
        }
    })
    return agents;

    function hoursFromTo(hours) {

        let hyphenPosition = hours.indexOf("-");
        let hourFrom = -1;
        let hourTo = -1;
        if (hyphenPosition > 0) {
            hourFrom = parseInt(hours.substring(0, hyphenPosition));
            hourTo = parseInt(hours.substring(hyphenPosition + 1));
            if (isNaN(hourFrom)) hourFrom = -1;
            if (isNaN(hourTo)) hourTo = -1;
        }
        let result = {
            from: null,
            to: null,
            err: null
        }
        if (hyphenPosition <= 0 || hourFrom < 0 || hourTo < 0) {
            result.err = 'Bad format';
        }
        else {
            result.from = hourFrom;
            result.to = hourTo;
        }
        return result;
    }

}  //choiceAgents