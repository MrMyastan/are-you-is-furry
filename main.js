Vue.component("question", {
    data: function () {
        return {
            answer: 2,
            styles: [
                {
                    borderColor: "#FF3333",
                    maxWidth: "120px",
                    maxHeight: "120px",
                    width: "19vw",
                    height: "19vw"
                },
                {
                    borderColor: "#F86E6E",
                    maxWidth: "100px",
                    maxHeight: "100px",
                    width: "16vw",
                    height: "16vw"
                },
                {
                    borderColor: "#c3b296",
                    maxWidth: "80px",
                    maxHeight: "80px",
                    width: "13vw",
                    height: "13vw"
                },
                {
                    borderColor: "#75e067",
                    maxWidth: "100px",
                    maxHeight: "100px",
                    width: "16vw",
                    height: "16vw"
                },
                {
                    borderColor: "#48FF31",
                    maxWidth: "120px",
                    maxHeight: "120px",
                    width: "19vw",
                    height: "19vw"
                },
            ]
        }
    },
    props: [
        "index",
        "question"
    ],
    template:
        `<div>
            <div>{{ index + 1}}. I see myself as someone who {{ question }}</div>
            <button v-for="num in [0, 1, 2, 3, 4]" @click="choose(num)" class="answer-buttons">
                <div v-if="num == answer" class="hollow-circle" :style="[ {backgroundColor: styles[num]['borderColor']}, styles[num] ]"></div>
                <div v-else class="hollow-circle" :style="styles[num]"></div>
            </button>
        </div>`,
    methods: {
        choose(newAnswer) {
            if (this.answer == newAnswer) {
                this.answer = 2
            } else {
                this.answer = newAnswer
            }
        }
    }
})

var app = new Vue({
    el: '#content',
    data: function () {
        return {
            state: "introducing",
            userName: null,
            resultText: "Click to reveal result",
            isRevealed: false,
            questions: [
                "is talkative",
                "tends to find fault in others",
                "does a thorough job",
                "is depressed",
                "is original, unique, and comes up with new ideas",
                "is reserved",
                "is helpful and unselfish when it comes to others",
                "can be somewhat careless",
                "is relaxed and remains calm in high-pressure situations",
                "is curious about many different things",
                "is full of energy",
                "starts arguments with others",
                "is a reliable worker",
                "can be tense",
                "is cerebral and enjoys thinking deeply",
                "generates a lot of enthusiasm",
                "has a forgiving nature",
                "tends to be disorganized",
                "worries a lot",
                "has an active imagination",
                "tends to be quiet",
                "is generally trusting",
                "tends to be lazy",
                "is emotionally stable and doesn't get upset easily",
                "is inventive",
                "has an assertive personality",
                "can be cold and aloof",
                "perseveres until the task is finished",
                "can be moody",
                "values artistic and creative experiences",
                "is sometimes shy and inhibited",
                "is considerate and kind to almost everyone",
                "does things efficiently",
                "remains calm in tense situations",
                "prefers work that is routine",
                "is outgoing and sociable",
                "is sometimes rude to others",
                "makes plans and follows through with them",
                "gets nervous easily",
                "likes to reflect and ponder different ideas",
                "has few artistic interests",
                "likes to cooperate with others",
                "is easily distracted",
                "is sophisticated in art, music, or literature"
            ]
        }
    },
    methods: {
        submitTest: function () {
            this.state = "processing"
            setTimeout(this.finish, ((Math.random() * 5000) + 1000))
        },
        finish: function () {
            this.state = "results"
        },
        revealResult: function () {
            this.resultText = "You are a furry!"
            this.isRevealed = true
        }
    }
})
