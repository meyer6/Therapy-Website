import { carouselModule, imageAndTextModule, imagesModule, landingModule, textModule } from "./moduleTemplates";

export interface pageTemplate {
    url: string;
    modules: Array<imageAndTextModule | textModule | imagesModule | landingModule | carouselModule>
}