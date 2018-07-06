import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory'; 
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return{
                header: address,
                description: <a>View campaigns</a>,
                fluid: true
            };
        });

        return <Card.Group items = {items} />;
    }



    render() {
        return (
        <Layout>
        <div>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
                <h3>Open campaigns</h3>
                <Button
                    floated = "right"
                    content="Create campaign"
                    icon="add circle"
                    primary
                />
            {this.renderCampaigns()}
        </div>
        </Layout>       
        );
}
}


export default CampaignIndex;