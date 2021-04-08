import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCw7X3tRDXrSq7CDxJ8upz1WlCZAai5WBw",
    authDomain: "expensify-6fd9d.firebaseapp.com",
    databaseURL: "https://expensify-6fd9d-default-rtdb.firebaseio.com",
    projectId: "expensify-6fd9d",
    storageBucket: "expensify-6fd9d.appspot.com",
    messagingSenderId: "118568066853",
    appId: "1:118568066853:web:b4d389bbfa314789dac4cc",
    measurementId: "G-BVR595T81D"
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    });

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });

    console.log(expenses);
});

database.ref('expenses').push({
    description: 'Rent!',
    note: '',
    amount: 109500,
    createdAt: 230987123409
});

database.ref('notes/-MXN-1EJlMTHnQoiln4n').remove();

database.ref('notes').push({
    title: 'Course Topics',
    body: 'React native, Firebase, Python'
});

database.ref().on('value', (snapshot) => {

    const name = snapshot.val().name;
    const title = snapshot.val().job.title;
    const company = snapshot.val().job.company;

    console.log(`${name} is a ${title} at ${company}.`);
}, (e) => {
    console.log('Error with fetching data', e);
});

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(35);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(36);
}, 10500);

database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });

database.ref().set({
    name: 'Chris Ahern',
    age: 34,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'SCV'
    },
    location: {
        city: 'Washington, D.C.',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

database.ref('isSingle')
    .remove()
    .then(() => {
        console.log('Remove succeeded');
    })
    .catch((e) => {
        console.log('Remove failed', e);
    });