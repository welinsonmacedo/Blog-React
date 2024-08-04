import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Big_Card_Component from '../Big_Card/Big_Card_Component';
import { Container, Title,ContainerPosts } from './Recent_Posts_Style';
import Small_Card_Component from './../Small_Card/Small_Card_Component';

const RecentPosts = () => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'articles'));
                const articlesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                // Ordenar os artigos por data, do mais recente ao mais antigo e pegar os 3 primeiros
                const sortedArticles = articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
                const latestArticles = sortedArticles.slice(0, 3);
                setRecentPosts(latestArticles);
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            }
        };
        fetchRecentPosts();
    }, []);

    return (
        <Container>
            <Title>Posts Recentes</Title>
            <ContainerPosts>
                {recentPosts.map((post) => (
                    <div key={post.id}>

                        <Small_Card_Component article={post} />

                    </div>
                ))}
            </ContainerPosts>


        </Container>
    );
};

export default RecentPosts;
