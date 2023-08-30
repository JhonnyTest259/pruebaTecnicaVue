<script setup>
import FacebookIcon from '../../assets/icons/facebookIcon.vue'
import TwitterIcon from '../../assets/icons/TwitterIcon.vue'
import InstagramIcon from '../../assets/icons/InstagramIcon.vue'
</script>
<template>
    <div class="wrapper-footer">
        <footer>
            <div class="logo"><img src="../../assets/images/footer-logo.jpg" alt=""></div>
            <div class="redes">
                <FacebookIcon></FacebookIcon>
                <TwitterIcon></TwitterIcon>
                <InstagramIcon></InstagramIcon>
            </div>
            <p>1990 - 2023 IMDb</p>
        </footer>
        <hr>
        <p class="last-text">&copy; 2022</p>
    </div>
</template>
  

  
<style lang="scss" scoped>
.wrapper-footer {
    background-color: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;

    hr {
        border-width: 0.001rem;
        margin: 0;
    }

    .last-text {
        text-align: center;
        color: var(--primary-color);
        padding-bottom: 5px;
    }
}

footer {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 100px;

        img {
            width: 100%;
        }
    }

    .redes {
        display: inline-block;

        svg {
            margin: 10px;
        }
    }

    p {
        font-size: 9px;
        color: #989898;
    }
}
</style>
  