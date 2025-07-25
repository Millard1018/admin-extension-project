import {UserData} from './UserData.js';

const latestBenefits = [
    new UserData("012345", "Juan Dela Cruz", "1018052004", "Birthday Benefit", "June 30, 2025", "Claimed", "January 18, 2005", "Kanluran, Santa Rosa", "0987-654-3210", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012346", "Dwight Schrute", "1018052005", "Allowance Benefit", "June 30, 2025", "Available", "February 19, 2005", "Kanluran, Santa Rosa", "0987-654-3210", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("012347", "Jim Halpert", "1018052006", "Christmas Benefit", "June 30, 2025", "Delayed", "March 20, 2000", "Kanluran, Santa Rosa", "0987-654-3210", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012348", "Michael Scott", "1018052007", "Birthday Benefit", "June 30, 2025", "Claimed", "March 15, 1975", "Kanluran, Santa Rosa", "0917-123-4567", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012349", "Pam Beesly", "1018052008", "Christmas Benefit", "June 30, 2025", "Available", "June 25, 1980", "Kanluran, Santa Rosa", "0928-765-4321", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012350", "Stanley Hudson", "1018052009", "Allowance Benefit", "June 30, 2025", "Delayed", "August 14, 1965", "Kanluran, Santa Rosa", "0999-555-1234", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("012351", "Angela Martin", "1018052010", "Birthday Benefit", "June 30, 2025", "Available", "September 10, 1978", "Kanluran, Santa Rosa", "0918-333-7890", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012352", "Kevin Malone", "1018052011", "Christmas Benefit", "June 30, 2025", "Claimed", "July 6, 1973", "Kanluran, Santa Rosa", "0932-111-2222", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012353", "Toby Flenderson", "1018052012", "Allowance Benefit", "June 30, 2025", "Delayed", "November 2, 1974", "Kanluran, Santa Rosa", "0907-888-6666", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("012354", "Meredith Palmer", "1018052013", "Birthday Benefit", "June 30, 2025", "Available", "October 28, 1970", "Kanluran, Santa Rosa", "0921-444-9999", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012355", "Oscar Martinez", "1018052014", "Christmas Benefit", "June 30, 2025", "Claimed", "May 9, 1975", "Kanluran, Santa Rosa", "0945-222-1111", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("012356", "Ryan Howard", "1018052015", "Allowance Benefit", "June 30, 2025", "Available", "April 30, 1983", "Kanluran, Santa Rosa", "0938-321-4567", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("012357", "Kelly Kapoor", "1018052016", "Birthday Benefit", "June 30, 2025", "Delayed", "February 5, 1984", "Kanluran, Santa Rosa", "0977-654-9870", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012360", "Creed Bratton", "1018052019", "Christmas Benefit", "June 30, 2025", "Claimed", "November 1, 1943", "Kanluran, Santa Rosa", "0916-303-4040", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("012361", "Phyllis Vance", "1018052020", "Allowance Benefit", "June 30, 2025", "Available", "July 10, 1955", "Kanluran, Santa Rosa", "0933-444-5555", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012362", "Darryl Philbin", "1018052021", "Birthday Benefit", "June 30, 2025", "Delayed", "June 15, 1977", "Kanluran, Santa Rosa", "0909-666-7777", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012363", "Andy Bernard", "1018052022", "Christmas Benefit", "June 30, 2025", "Claimed", "May 29, 1973", "Kanluran, Santa Rosa", "0911-888-9999", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012364", "Erin Hannon", "1018052023", "Allowance Benefit", "June 30, 2025", "Available", "April 1, 1986", "Kanluran, Santa Rosa", "0934-222-3333", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012365", "Jan Levinson", "1018052024", "Birthday Benefit", "June 30, 2025", "Delayed", "March 5, 1970", "Kanluran, Santa Rosa", "0940-101-2020", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012366", "Roy Anderson", "1018052025", "Christmas Benefit", "June 30, 2025", "Available", "February 17, 1975", "Kanluran, Santa Rosa", "0955-010-1111", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012367", "Holly Flax", "1018052026", "Allowance Benefit", "June 30, 2025", "Claimed", "December 18, 1973", "Kanluran, Santa Rosa", "0915-232-2323", "Hearing Impaired", "Centralized", "₱ 1000")
]

const prevBenefits = [
    new UserData("013001", "Michael Scott", "1018052101", "Birthday Benefit", "May 2025", "Claimed", "March 15, 1975", "Kanluran, Santa Rosa", "0917-123-4567", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("013002", "Dwight Schrute", "1018052102", "Allowance Benefit", "April 2025", "Unclaimed", "January 20, 1970", "Kanluran, Santa Rosa", "0918-111-2233", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013003", "Jim Halpert", "1018052103", "Christmas Benefit", "March 2025", "Claimed", "October 1, 1978", "Kanluran, Santa Rosa", "0919-222-3344", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013004", "Pam Beesly", "1018052104", "Birthday Benefit", "January 2025", "Claimed", "June 25, 1980", "Kanluran, Santa Rosa", "0928-765-4321", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013005", "Stanley Hudson", "1018052105", "Allowance Benefit", "February 2025", "Unclaimed", "August 14, 1965", "Kanluran, Santa Rosa", "0999-555-1234", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013006", "Angela Martin", "1018052106", "Christmas Benefit", "March 2025", "Claimed", "September 10, 1978", "Kanluran, Santa Rosa", "0918-333-7890", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013007", "Kevin Malone", "1018052107", "Birthday Benefit", "February 2025", "Claimed", "July 6, 1973", "Kanluran, Santa Rosa", "0932-111-2222", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013008", "Toby Flenderson", "1018052108", "Allowance Benefit", "May 2025", "Unclaimed", "November 2, 1974", "Kanluran, Santa Rosa", "0907-888-6666", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013009", "Meredith Palmer", "1018052109", "Christmas Benefit", "April 2025", "Claimed", "October 28, 1970", "Kanluran, Santa Rosa", "0921-444-9999", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013010", "Oscar Martinez", "1018052110", "Birthday Benefit", "January 2025", "Claimed", "May 9, 1975", "Kanluran, Santa Rosa", "0945-222-1111", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013011", "Ryan Howard", "1018052111", "Allowance Benefit", "May 2025", "Unclaimed", "April 30, 1983", "Kanluran, Santa Rosa", "0938-321-4567", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013012", "Kelly Kapoor", "1018052112", "Christmas Benefit", "March 2025", "Claimed", "February 5, 1984", "Kanluran, Santa Rosa", "0977-654-9870", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013013", "Creed Bratton", "1018052113", "Birthday Benefit", "February 2025", "Unclaimed", "November 1, 1943", "Kanluran, Santa Rosa", "0916-303-4040", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013014", "Phyllis Vance", "1018052114", "Allowance Benefit", "April 2025", "Claimed", "July 10, 1955", "Kanluran, Santa Rosa", "0933-444-5555", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013015", "Darryl Philbin", "1018052115", "Christmas Benefit", "March 2025", "Unclaimed", "June 15, 1977", "Kanluran, Santa Rosa", "0909-666-7777", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("013016", "Andy Bernard", "1018052116", "Birthday Benefit", "January 2025", "Claimed", "May 29, 1973", "Kanluran, Santa Rosa", "0911-888-9999", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013017", "Erin Hannon", "1018052117", "Allowance Benefit", "May 2025", "Claimed", "April 1, 1986", "Kanluran, Santa Rosa", "0934-222-3333", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013018", "Jan Levinson", "1018052118", "Christmas Benefit", "March 8, 2025", "Unclaimed", "March 5, 1970", "Kanluran, Santa Rosa", "0940-101-2020", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013019", "Roy Anderson", "1018052119", "Birthday Benefit", "February 2025", "Claimed", "February 17, 1975", "Kanluran, Santa Rosa", "0955-010-1111", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013020", "Holly Flax", "1018052120", "Allowance Benefit", "January 2025", "Claimed", "December 18, 1973", "Kanluran, Santa Rosa", "0915-232-2323", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013021", "Pam Beesly", "1018052121", "Christmas Benefit", "May 2025", "Unclaimed", "June 25, 1980", "Kanluran, Santa Rosa", "0928-765-4321", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013022", "Dwight Schrute", "1018052122", "Birthday Benefit", "April 2025", "Claimed", "January 20, 1970", "Kanluran, Santa Rosa", "0918-111-2233", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013023", "Michael Scott", "1018052123", "Birthday Benefit", "April 2025", "Unclaimed", "March 15, 1975", "Kanluran, Santa Rosa", "0917-123-4567", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013024", "Jim Halpert", "1018052124", "Allowance Benefit", "May 2025", "Claimed", "October 1, 1978", "Kanluran, Santa Rosa", "0919-222-3344", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013025", "Angela Martin", "1018052125", "Christmas Benefit", "February 2025", "Unclaimed", "September 10, 1978", "Kanluran, Santa Rosa", "0918-333-7890", "Mobility Impaired"),
    new UserData("013026", "Kevin Malone", "1018052126", "Birthday Benefit", "March 2025", "Claimed", "July 6, 1973", "Kanluran, Santa Rosa", "0932-111-2222", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013027", "Erin Hannon", "1018052127", "Allowance Benefit", "April 2025", "Unclaimed", "April 1, 1986", "Kanluran, Santa Rosa", "0934-222-3333", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013028", "Oscar Martinez", "1018052128", "Birthday Benefit", "January 26, 2025", "Claimed", "May 9, 1975", "Kanluran, Santa Rosa", "0945-222-1111", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("013029", "Kelly Kapoor", "1018052129", "Christmas Benefit", "May 2025", "Claimed", "February 5, 1984", "Kanluran, Santa Rosa", "0977-654-9870", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013030", "Creed Bratton", "1018052130", "Allowance Benefit", "April 2025", "Unclaimed", "November 1, 1943", "Kanluran, Santa Rosa", "0916-303-4040", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013031", "Phyllis Vance", "1018052131", "Birthday Benefit", "March 2025", "Claimed", "July 10, 1955", "Kanluran, Santa Rosa", "0933-444-5555", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013032", "Andy Bernard", "1018052132", "Christmas Benefit", "May 2025", "Unclaimed", "May 29, 1973", "Kanluran, Santa Rosa", "0911-888-9999", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013033", "Meredith Palmer", "1018052133", "Allowance Benefit", "February 22, 2025", "Claimed", "October 28, 1970", "Kanluran, Santa Rosa", "0921-444-9999", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013034", "Pam Beesly", "1018052134", "Birthday Benefit", "January 2025", "Unclaimed", "June 25, 1980", "Kanluran, Santa Rosa", "0928-765-4321", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("013035", "Darryl Philbin", "1018052135", "Christmas Benefit", "March 2025", "Claimed", "June 15, 1977", "Kanluran, Santa Rosa", "0909-666-7777", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013036", "Ryan Howard", "1018052136", "Allowance Benefit", "February 2025", "Claimed", "April 30, 1983", "Kanluran, Santa Rosa", "0938-321-4567", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013037", "Toby Flenderson", "1018052137", "Birthday Benefit", "May 2025", "Unclaimed", "November 2, 1974", "Kanluran, Santa Rosa", "0907-888-6666", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013038", "Jan Levinson", "1018052138", "Christmas Benefit", "April 2025", "Claimed", "March 5, 1970", "Kanluran, Santa Rosa", "0940-101-2020", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013039", "Roy Anderson", "1018052139", "Allowance Benefit", "January 2025", "Unclaimed", "February 17, 1975", "Kanluran, Santa Rosa", "0955-010-1111", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013040", "Holly Flax", "1018052140", "Birthday Benefit", "March 2025", "Claimed", "December 18, 1973", "Kanluran, Santa Rosa", "0915-232-2323", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013041", "Stanley Hudson", "1018052141", "Christmas Benefit", "May 2025", "Claimed", "August 14, 1965", "Kanluran, Santa Rosa", "0999-555-1234", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013042", "Angela Martin", "1018052142", "Allowance Benefit", "February 2025", "Unclaimed", "September 10, 1978", "Kanluran, Santa Rosa", "0918-333-7890", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013043", "Michael Scott", "1018052143", "Birthday Benefit", "April 2025", "Claimed", "March 15, 1975", "Kanluran, Santa Rosa", "0917-123-4567", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013044", "Creed Bratton", "1018052144", "Christmas Benefit", "March 2025", "Unclaimed", "November 1, 1943", "Kanluran, Santa Rosa", "0916-303-4040", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013045", "Jim Halpert", "1018052145", "Allowance Benefit", "February 2025", "Claimed", "October 1, 1978", "Kanluran, Santa Rosa", "0919-222-3344", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013046", "Oscar Martinez", "1018052146", "Birthday Benefit", "January 2025", "Unclaimed", "May 9, 1975", "Kanluran, Santa Rosa", "0945-222-1111", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013047", "Kevin Malone", "1018052147", "Christmas Benefit", "March 2025", "Claimed", "July 6, 1973", "Kanluran, Santa Rosa", "0932-111-2222", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("013048", "Andy Bernard", "1018052148", "Allowance Benefit", "April 2025", "Unclaimed", "May 29, 1973", "Kanluran, Santa Rosa", "0911-888-9999", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("013049", "Phyllis Vance", "1018052149", "Birthday Benefit", "May 2025", "Claimed", "July 10, 1955", "Kanluran, Santa Rosa", "0933-444-5555", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("013050", "Kelly Kapoor", "1018052150", "Christmas Benefit", "February 2025", "Unclaimed", "February 5, 1984", "Kanluran, Santa Rosa", "0977-654-9870", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("013051", "Darryl Philbin", "1018052151", "Allowance Benefit", "January 2025", "Claimed", "June 15, 1977", "Kanluran, Santa Rosa", "0909-666-7777", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("013052", "Erin Hannon", "1018052152", "Birthday Benefit", "April 2025", "Unclaimed", "April 1, 1986", "Kanluran, Santa Rosa", "0934-222-3333", "Mobility Impaired", "Decentralized", "₱ 1000")
]

const incomingBenefits = [
    new UserData("012345", "Juan Dela Cruz", "1018052004", "Birthday Benefit", "July 30, 2025", "Unavailable", "January 18, 2005", "Kanluran, Santa Rosa", "0987-654-3210", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012346", "Dwight Schrute", "1018052005", "Allowance Benefit", "July 30, 2025", "Unavailable", "February 19, 2005", "Kanluran, Santa Rosa", "0987-654-3210", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012347", "Jim Halpert", "1018052006", "Christmas Benefit", "July 30, 2025", "Unavailable", "March 20, 2000", "Kanluran, Santa Rosa", "0987-654-3210", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012348", "Michael Scott", "1018052007", "Birthday Benefit", "July 30, 2025", "Unavailable", "March 15, 1975", "Kanluran, Santa Rosa", "0917-123-4567", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012349", "Pam Beesly", "1018052008", "Christmas Benefit", "July 30, 2025", "Unavailable", "June 25, 1980", "Kanluran, Santa Rosa", "0928-765-4321", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012350", "Stanley Hudson", "1018052009", "Allowance Benefit", "July 30, 2025", "Unavailable", "August 14, 1965", "Kanluran, Santa Rosa", "0999-555-1234", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012351", "Angela Martin", "1018052010", "Birthday Benefit", "July 30, 2025", "Unavailable", "September 10, 1978", "Kanluran, Santa Rosa", "0918-333-7890", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012352", "Kevin Malone", "1018052011", "Christmas Benefit", "July 30, 2025", "Unavailable", "July 6, 1973", "Kanluran, Santa Rosa", "0932-111-2222", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("012353", "Toby Flenderson", "1018052012", "Allowance Benefit", "July 30, 2025", "Unavailable", "November 2, 1974", "Kanluran, Santa Rosa", "0907-888-6666", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012354", "Meredith Palmer", "1018052013", "Birthday Benefit", "July 30, 2025", "Unavailable", "October 28, 1970", "Kanluran, Santa Rosa", "0921-444-9999", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012355", "Oscar Martinez", "1018052014", "Christmas Benefit", "July 30, 2025", "Unavailable", "May 9, 1975", "Kanluran, Santa Rosa", "0945-222-1111", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("012356", "Ryan Howard", "1018052015", "Allowance Benefit", "July 30, 2025", "Unavailable", "April 30, 1983", "Kanluran, Santa Rosa", "0938-321-4567", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012357", "Kelly Kapoor", "1018052016", "Birthday Benefit", "July 30, 2025", "Unavailable", "February 5, 1984", "Kanluran, Santa Rosa", "0977-654-9870", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012360", "Creed Bratton", "1018052019", "Christmas Benefit", "July 30, 2025", "Unavailable", "November 1, 1943", "Kanluran, Santa Rosa", "0916-303-4040", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012361", "Phyllis Vance", "1018052020", "Allowance Benefit", "July 30, 2025", "Unavailable", "July 10, 1955", "Kanluran, Santa Rosa", "0933-444-5555", "Hearing Impaired", "Centralized", "₱ 1000"),
    new UserData("012362", "Darryl Philbin", "1018052021", "Birthday Benefit", "July 30, 2025", "Unavailable", "June 15, 1977", "Kanluran, Santa Rosa", "0909-666-7777", "Mobility Impaired", "Decentralized", "₱ 1000"),
    new UserData("012363", "Andy Bernard", "1018052022", "Christmas Benefit", "July 30, 2025", "Unavailable", "May 29, 1973", "Kanluran, Santa Rosa", "0911-888-9999", "Visually Impaired", "Centralized", "₱ 1000"),
    new UserData("012364", "Erin Hannon", "1018052023", "Allowance Benefit", "July 30, 2025", "Unavailable", "April 1, 1986", "Kanluran, Santa Rosa", "0934-222-3333", "Hearing Impaired", "Decentralized", "₱ 1000"),
    new UserData("012365", "Jan Levinson", "1018052024", "Birthday Benefit", "July 30, 2025", "Unavailable", "March 5, 1970", "Kanluran, Santa Rosa", "0940-101-2020", "Mobility Impaired", "Centralized", "₱ 1000"),
    new UserData("012366", "Roy Anderson", "1018052025", "Christmas Benefit", "July 30, 2025", "Unavailable", "February 17, 1975", "Kanluran, Santa Rosa", "0955-010-1111", "Visually Impaired", "Decentralized", "₱ 1000"),
    new UserData("012367", "Holly Flax", "1018052026", "Allowance Benefit", "July 30, 2025", "Unavailable", "December 18, 1973", "Kanluran, Santa Rosa", "0915-232-2323", "Hearing Impaired", "Centralized", "₱ 1000")
];

let unclaimed = 0;
let delayed = 0;
let unavailable = 0;
let available = 0;


function getStatusIcon(status) {
    if (status === "Claimed") {
        return `<div class="flex items-center justify-center">
                    <div class="group-hover:bg-gray-500 group-hover:text-white flex items-center bg-gray-200 rounded-4xl py-0.5 text-black px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class=" text-gray-500 group-hover:text-white size-5 mr-[0.2vw]">
                            <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                        </svg> Claimed
                    </div>
                </div>`;
        }
    if (status === "Unclaimed") {
        unclaimed ++;
        return `<div class="flex items-center justify-center">
                    <div class=" group-hover:bg-slate-900 group-hover:text-white flex items-center bg-slate-200 rounded-4xl py-0.5 text-black px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 mr-[0.2vw]">
                            <path fill-rule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                        </svg> Unclaimed
                    </div>
                </div>`;
    }
    if (status === "Delayed") {
        delayed ++;
        return `<div class="flex items-center justify-center">
                    <div class="group-hover:bg-amber-500 group-hover:text-white flex items-center bg-amber-200 rounded-4xl py-0.5 text-black px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="text-amber-500 group-hover:text-white size-4 mr-[0.2vw]">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z" clip-rule="evenodd" />
                        </svg> Delayed
                    </div>
                </div>`;
    }
    if (status === "Unavailable") {
        unavailable ++;
        return `<div class="flex items-center justify-center">
                    <div class="child group-hover:bg-red-800 group-hover:text-white flex items-center bg-red-200 rounded-4xl py-0.5 text-black px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="text-red-800 group-hover:text-white size-5">
                            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                        </svg> Unavailable
                    </div>
                </div>`;
    }
    if (status === "Available") {
        available ++;
        return `<div class="flex items-center justify-center">
                    <div class=" group-hover:bg-green-500 group-hover:text-white flex items-center bg-green-200 rounded-4xl py-0.5 text-black px-2">
                        <div class="size-3 mr-[0.2vw] rounded-full bg-green-500 group-hover:bg-white"></div> Available
                    </div>
                </div>`;
    }
}

const tbodyLatest = document.querySelector('#latestTable tbody')
const tbodyPrev = document.querySelector('#prevTable tbody')
const tbodyIncoming = document.querySelector('#incomingTable tbody')

function trData(benefitType, tbody) {
    benefitType.forEach(entry => {
    const tr = document.createElement("tr");
    tr.onclick = function () {
        personalInfo(entry.getName(), entry.getID(), entry.getBirthday(), entry.getAddress(), 
        entry.getContact(), entry.getDisability(), entry.getStatus(), entry.getTransactionNo(), 
        entry.getBenefit(), entry.getDate(), entry.getType(), entry.getAmount());
    }

    if (entry.getStatus() === "Available") {
        tr.className = "available group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
    } 
    else if (entry.getStatus() === "Unavailable") {
        tr.className = "unavailable group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
    } 
    else if (entry.getStatus() === "Delayed") {
        tr.className = "delayed group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
    }
    else if (entry.getStatus() === "Unclaimed") {
        tr.className = "unclaimed group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
    }  
    else {
        tr.className = "group border-b-[0.5px] border-slate-950/30 hover:bg-slate-200 h-10 transition-all duration-40 ease-in-out hover:size-12 active:bg-green-900";
    }

    tr.innerHTML = `
        <td class="md:flex items-center justify-center h-10 hidden">${entry.getTransactionNo()}</td>
        <td>${entry.getName()}</td>
        <td class="md:flex items-center justify-center h-10 hidden">${entry.getID()}</td>
        <td>${entry.getBenefit()}</td>
        <td>${entry.getDate()}</td>
        <td>${getStatusIcon(entry.getStatus())}</td>`;
    
    tbody.appendChild(tr);
});
}

function deleteData(tbody) {
    const rows = tbody.querySelectorAll("tr");
    rows.forEach(row => {
        tbody.removeChild(row)
    });
}

trData(latestBenefits, tbodyLatest);
trData(prevBenefits, tbodyPrev);
trData(incomingBenefits, tbodyIncoming);

document.getElementById("Unclaimed").textContent = unclaimed;
document.getElementById("Unavailable").textContent = unavailable;
document.getElementById("Delayed").textContent = delayed;
document.getElementById("Available").textContent = available;

/*document.addEventListener("DOMContentLoaded", () => {

    function button(benefitType) {
        const button = document.getElementById("claimButton");
        benefitType.forEach(data => {
            if(data.getStatus() === "Claimed" || data.getStatus() === "Unavailable" || data.getStatus() === "Delayed") {
                button.classList.add('invisible')
            } else {
                button.classList.remove("invisible")
            }
        });
    }

    button(latestBenefits);
    button(prevBenefits);
});*/
let currentInfo = null;

function personalInfo(name, ID, birthday, address, contact, disability, status,  transactionNo, benefit, date, type, amount) {
    document.getElementById('recipientModal').classList.remove('opacity-0', 'invisible');
    document.getElementById("Blur").classList.remove("invisible");
    document.getElementById('body').classList.add('overflow-hidden');

    document.getElementById('modalName').textContent = name;
    document.getElementById('modalIDNumber').textContent = ID;
    document.getElementById('modalBirthday').textContent = birthday;
    document.getElementById('modalAddress').textContent = address;
    document.getElementById('modalContact').textContent = contact;
    document.getElementById('modalDisability').textContent = disability;
    document.getElementById('modalStatus').textContent = status;
    document.getElementById('modalTransactionNo').textContent = transactionNo;
    document.getElementById('modalBenefit').textContent = benefit;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('modalType').textContent = type;
    document.getElementById('modalAmount').textContent = amount;

    document.getElementById('modalConfirm').textContent = name + " ?";

    currentInfo = {transactionNo, status}

    const initialButton = document.getElementById("initialClaim");

    if(status === "Unavailable" || status === "Delayed") {
        initialButton.classList.add("hidden");
    } else if (status === "Claimed") {
        document.getElementById("changeClaim").textContent = "Claimed";
    } else {
        initialButton.classList.remove("hidden");
    }

}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("claimButton").addEventListener("click", () => {
        document.getElementById("initialClaim").classList.add("hidden")
        available=available-available;
        unclaimed=unclaimed-unclaimed
        const { transactionNo, status } = currentInfo;

        const found = latestBenefits.find(data => data.getTransactionNo() === transactionNo && data.getStatus() === status) ||
                    prevBenefits.find(data => data.getTransactionNo() === transactionNo && data.getStatus() === status) ||
                    incomingBenefits.find(data => data.getTransactionNo() === transactionNo && data.getStatus() === status);

        if (found) {
            found.setStatus("Claimed");
            deleteData(tbodyLatest);
            deleteData(tbodyPrev);
            deleteData(tbodyIncoming);
            trData(latestBenefits, tbodyLatest);
            trData(prevBenefits, tbodyPrev);
            trData(incomingBenefits, tbodyIncoming);
        }
        document.getElementById("Unclaimed").textContent = unclaimed;
        document.getElementById("Available").textContent = available;
    });
});
    