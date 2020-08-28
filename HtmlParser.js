function scheduleHtmlParser(html) {
    let result = []
    let courses = $('td').has('br')
    for (let u = 0; u < courses.length; u++) {
        let re = {sections: [], weeks: []}

        re.position = courses[u].children[0].next.children[0].next.children[0].next.children[0].data
        re.teacher = courses[u].children[0].next.children[0].next.children[0].data
        re.name = courses[u].children[0].data

        let week = courses[u].children[0].next.children[0].data
        if (week) {
            let weekChinese = week.split('第')[0]
            switch (weekChinese) {
                case "周一": {
                    re.day = 1;
                    break;
                }
                case "周二": {
                    re.day = 2;
                    break;
                }
                case "周三": {
                    re.day = 3;
                    break;
                }
                case "周四": {
                    re.day = 4;
                    break;
                }
                case "周五": {
                    re.day = 5;
                    break;
                }
                case "周六": {
                    re.day = 6;
                    break;
                }
                case "周日": {
                    re.day = 7;
                    break;
                }
                default : {
                    re.day = null;
                    break;
                }
            }



            let weekString1 = week.split('第')[2]
            let weekString2 = weekString1.split('周')[0]
            let weekString3 = weekString2.split('-')
            if (week.search('单')!==-1) {
                if (weekString3[0] / 2 !== 1) {
                    for (let i = Number(weekString3[0]); i <= Number(weekString3[1]); i += 2)
                        re.weeks.push(i)
                } else if (weekString3[0] / 2 === 1) {
                    for (let i = Number(weekString3[0]) + 1; i <= Number(weekString3[1]); i += 2)
                        re.weeks.push(i)
                }
            } else if (week.search('双')!==-1) {
                if (weekString3[0] / 2 === 1) {
                    for (let i = Number(weekString3[0]); i <= Number(weekString3[1]); i += 2)
                        re.weeks.push(i)
                } else if (weekString3[0] / 2 !== 1) {
                    for (let i = Number(weekString3[0]) + 1; i <= Number(weekString3[1]); i += 2)
                        re.weeks.push(i)
                }
            } else {
                for (let i = Number(weekString3[0]); i <= Number(weekString3[1]); i++)
                    re.weeks.push(i)
            }

            let courseString1 = week.split('第')[1]
            let courseString2 = courseString1.split('节')[0]
            if (courseString2.length === 1)
                re.sections.push({section: courseString2[0]})
            else {
                let courseString3 = courseString2.split(',')
                for (let i = 0; i < courseString3.length; i++)
                    re.sections.push({section: courseString3[i]})
            }

        }
        result.push(re)
        if (courses[u].children[0].next.children[0].next.children[0].next.children[0].next!==null){
            let re2 = {sections: [], weeks: []}
            re2.position = courses[u].children[0].next.children[0].next.children[0].next.children[0].next.children[0].children[0].next.children[0].next.children[0].next.children[0].data
            re2.teacher = courses[u].children[0].next.children[0].next.children[0].next.children[0].next.children[0].children[0].next.children[0].next.children[0].data
            re2.name = courses[u].children[0].next.children[0].next.children[0].next.children[0].next.children[0].children[0].data

            let week2 = courses[u].children[0].next.children[0].next.children[0].next.children[0].next.children[0].children[0].next.children[0].data

            if (week2) {
                let weekChinese2 = week2.split('第')[0]
                switch (weekChinese2) {
                    case "周一": {
                        re2.day = 1;
                        break;
                    }
                    case "周二": {
                        re2.day = 2;
                        break;
                    }
                    case "周三": {
                        re2.day = 3;
                        break;
                    }
                    case "周四": {
                        re2.day = 4;
                        break;
                    }
                    case "周五": {
                        re2.day = 5;
                        break;
                    }
                    case "周六": {
                        re2.day = 6;
                        break;
                    }
                    case "周日": {
                        re2.day = 7;
                        break;
                    }
                    default : {
                        re2.day = null;
                        break;
                    }
                }
            }
            let weekString4 = week2.split('第')[2]
            let weekString5 = weekString4.split('周')[0]
            let weekString6 = weekString5.split('-')
            if (week2.search('单')!==-1) {
                if (Number(weekString6[0]) / 2 !== 1) {
                    for (let i = Number(weekString6[0]); i <= Number(weekString6[1]); i += 2)
                        re2.weeks.push(i)
                } else if (Number(weekString6[0]) / 2 === 1) {
                    for (let i = Number(weekString6[0]); i <= Number(weekString6[1]); i += 2)
                        re2.weeks.push(i)
                }
            } else if (week2.search('双')!==-1) {
                if (Number(weekString6[0]) / 2 === 1) {
                    for (let i = Number(weekString6[0]); i <= Number(weekString6[1]); i += 2)
                        re2.weeks.push(i)
                } else if (Number(weekString6[0]) / 2 !== 1) {
                    for (let i = Number(weekString6[0]) + 1; i <= Number(weekString6[1]); i += 2)
                        re2.weeks.push(i)
                }
            } else {
                for (let i = Number(weekString6[0]); i <= Number(weekString6[1]); i++)
                    re2.weeks.push(i)
            }

            let courseString4 = week2.split('第')[1]
            let courseString5 = courseString4.split('节')[0]
            if (courseString5.length === 1)
                re2.sections.push({section: courseString2[0]})
            else {
                let courseString6 = courseString5.split(',')
                for (let i = 0; i < courseString6.length; i++)
                    re2.sections.push({section: courseString6[i]})
            }
            result.push(re2)
        }
    }
    console.log(result)
    return {courseInfos: result}
}
