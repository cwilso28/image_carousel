import "./styles.css"

// Image carousel status
class carouselManager {
    constructor() {
        this.setButtonFunction();
        this.setCarouselNavigatorFunction();
        this.ordered_list = document.getElementById("carousel-container");
        this.line_items = this.ordered_list.getElementsByTagName("li");
        this.line_item_count = this.line_items.length;
        this.image_index = 0;
        this.position = 0;
        console.log(this.line_items)
    };

    carouselForward() {
        if (this.image_index < this.line_item_count - 1) {
            this.image_index += 1;
            this.position -= 100;

            this.ordered_list.style.left = this.position + "%";
        };
    }

    carouselBackward() {
        if (this.image_index > 0) {
            this.image_index -= 1;
            this.position += 100;

            this.ordered_list.style.left = this.position + "%";
        }
    }

    carouselAbsolute(index) {
        this.image_index = index;
        this.position = index * -100;

        this.ordered_list.style.left = this.position + "%";
    }

    setButtonFunction() {
        let right_arrow = document.getElementById("right-arrow");
        right_arrow.addEventListener("click", (e) => {
            this.carouselForward();
        })

        let left_arrow = document.getElementById("left-arrow");
        left_arrow.addEventListener("click", (e) => {
            this.carouselBackward();
        })
    }

    parseRadioName(name) {
        let name_components = name.split("_");
        return name_components[1];
    }

    setCarouselNavigatorFunction() {
        let carousel_navigator = document.getElementById("radio-buttons");
        carousel_navigator.addEventListener("click", (e) => {
            let id_check = document.querySelector('input[name="carousel"]:checked').id;
            let index = this.parseRadioName(id_check) - 1;
            this.carouselAbsolute(index);
        });
    }
}
// Adjust highlighted button as image carousel rotates or is rotated

//

new carouselManager();