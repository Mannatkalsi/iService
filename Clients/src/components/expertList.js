import faker from 'faker';

const expertList = [
    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "position": faker.name.jobTitle(),
        "description":faker.company.catchPhrase(),
        "rating": `Rating: ⭐ ${faker.finance.amount(0,5)} Stars`
    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "position": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `Rating: ⭐ ${faker.finance.amount(0,5)} Stars`
    },
    {
        "key": 2,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "position": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `Rating: ⭐ ${faker.finance.amount(0,5)} Stars`
    },
    {
        "key": 3,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "position": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `Rating: ⭐ ${faker.finance.amount(0,5)} Stars`
    },
    {
        "key": 4,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "position": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `Rating: ⭐ ${faker.finance.amount(0,5)} Stars`
    },
    {
        "key": 5,
        "avatar": faker.image.avatar(),
        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "position": faker.name.jobTitle(),
        "description": faker.company.catchPhrase(),
        "rating": `Rating: ⭐ ${faker.finance.amount(0,5)} Stars`
    },
    
    
]

export default expertList;