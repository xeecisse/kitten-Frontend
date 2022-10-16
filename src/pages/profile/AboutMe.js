import { Card } from "reactstrap"

const Details = ({ label='', value='' }) => {
    return (
        <div className="row">
            <span className="col-5 fw-bold">{label}:</span>
            <span className="col-7">{value}</span>
        </div>
    )
}

export default () => {
    return (
        <div>
            <Card body className="my-2 text-white" color='dark' >
                <Details label="Age" value="26" />
                <Details label="Gender" value="Female" />
                <Details label="Complexion" value="Light-Skinned" />
                <Details label="Hair Color" value="Brown" />
                <Details label="Height" value="1.7m" />
                <Details label="Bust" value="26" />
                <Details label="Dress" value="26" />
                <Details label="Shoes" value="26" />
                <Details label="Hips" value="26" />
                <Details label="Waist" value="26" />
            </Card>

            <Card body className="my-2 text-white" color='dark'>
                <Details label="Shape" value="Bottle" />
                <Details label="Speciality" value="Video Shoot" />
                <Details label="Services" value="Tallent Show, Product Advertisement" />
            </Card>
            
            <Card body className="my-2 text-white" color='dark'>
                <h4>About Me</h4>

                <p>
                    I am Zainab, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint accusantium aperiam magni incidunt omnis temporibus voluptatum illo amet repellat rem molestiae dolorum et alias molestias delectus, sapiente numquam eveniet unde cum ullam. Inventore assumenda quidem asperiores nemo deleniti optio consequuntur perferendis, voluptatem quos, natus sapiente dolor. 
                </p>

                <p>
                    Veritatis beatae quod eum commodi deserunt a magni cupiditate quia veniam maiores repellat, dolore magnam expedita delectus incidunt illum ipsum? Odio, autem quae quaerat et sequi incidunt perspiciatis vero voluptates officia ipsa libero blanditiis eius dolorem iure deserunt, quod, dolorum doloribus modi quidem laborum asperiores totam. Distinctio, odit dicta. 
                </p>
                
                <p>
                    Aut ipsam, obcaecati doloremque beatae labore eligendi consequatur, ab excepturi rerum nulla quod, harum ipsum earum facilis! Modi excepturi, ad inventore maxime optio laboriosam nisi accusantium dolorem vitae enim minima error mollitia veritatis neque quo repudiandae dicta, laborum odio tenetur ea. Similique, quae. 
                </p>

                <p>
                    Deserunt doloribus dolorem asperiores in minima iste voluptates accusamus, officiis enim, aspernatur architecto libero vero quis mollitia porro? 
                </p>
            </Card>


        </div>
    )
}
